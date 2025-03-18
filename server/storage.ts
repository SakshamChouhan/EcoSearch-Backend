import { waitlistEntries, type WaitlistEntry, type InsertWaitlist } from "@shared/schema";
import nodemailer from "nodemailer";

export interface IStorage {
  createWaitlistEntry(entry: InsertWaitlist): Promise<WaitlistEntry>;
}

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASSWORD;

  if (!user || !pass) {
    console.error("Missing email credentials. Please check your .env file");
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
    tls: {
      rejectUnauthorized: false // For development only
    }
  });
};

export class MemStorage implements IStorage {
  private waitlist: Map<number, WaitlistEntry>;
  currentId: number;

  constructor() {
    this.waitlist = new Map();
    this.currentId = 1;
  }

  async createWaitlistEntry(insertEntry: InsertWaitlist): Promise<WaitlistEntry> {
    const id = this.currentId++;
    const entry: WaitlistEntry = { ...insertEntry, id };
    this.waitlist.set(id, entry);

    // Send confirmation email
    try {
      const transporter = createTransporter();
      if (!transporter) {
        throw new Error("Email configuration is not set up correctly");
      }

      await transporter.verify(); // Verify connection configuration

      const info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: entry.email,
        subject: "Welcome to EcoSearch Waitlist!",
        html: `
          <h1>Welcome to EcoSearch!</h1>
          <p>Hi ${entry.name},</p>
          <p>Thank you for joining our waitlist. We'll keep you updated on our progress.</p>
          <p>Best regards,<br/>The EcoSearch Team</p>
        `
      });

      console.log("Email sent successfully:", info.messageId);
    } catch (error: any) {
      console.error("Failed to send email:", {
        message: error.message,
        code: error.code,
        response: error.response
      });
      // Don't throw error as entry was created successfully
    }

    return entry;
  }
}

export const storage = new MemStorage();
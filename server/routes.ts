import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const entry = insertWaitlistSchema.parse(req.body);
      const result = await storage.createWaitlistEntry(entry);
      res.json(result);
    } catch (error) {
      res.status(400).json({ message: "Invalid request data" });
    }
  });

  return createServer(app);
}

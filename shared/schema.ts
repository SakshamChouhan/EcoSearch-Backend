import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const waitlistEntries = pgTable("waitlist_entries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull()
});

export const insertWaitlistSchema = createInsertSchema(waitlistEntries)
  .extend({
    email: z.string().email("Please enter a valid email address"),
    name: z.string().min(2, "Name must be at least 2 characters")
  });

export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;
export type WaitlistEntry = typeof waitlistEntries.$inferSelect;

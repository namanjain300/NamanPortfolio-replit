import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // In a real app, you would send an email here using Nodemailer
      console.log('New contact message received:', message);
      
      res.status(201).json({ 
        success: true, 
        message: "Message sent successfully!" 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to send message. Please try again." 
      });
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error('Error fetching contact messages:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch messages" 
      });
    }
  });

  // Download resume endpoint
  app.get("/api/resume/download", (req, res) => {
    try {
      const resumePath = path.resolve(
        import.meta.dirname,
        "..",
        "attached_assets",
        "Naman Jain Resume.pdf",
      );

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        'attachment; filename="Naman_Jain_Resume.pdf"',
      );

      res.sendFile(resumePath, (err) => {
        if (err) {
          console.error("Error sending resume file:", err);
          if (!res.headersSent) {
            res
              .status(500)
              .json({
                success: false,
                message: "Failed to download resume. Please try again later.",
              });
          }
        }
      });
    } catch (error) {
      console.error("Resume download error:", error);
      if (!res.headersSent) {
        res
          .status(500)
          .json({
            success: false,
            message: "Failed to download resume. Please try again later.",
          });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

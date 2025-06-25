import express from "express";
import nodemailer from "nodemailer";
import multer from "multer";
import upload from "../middleware/multer.js";
import fs from "fs";

import config from "../config/env.config.js";

const router = express.Router();

// ======= POST /api/career/apply =========
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      position,
      city,
      location,
      experience,
      qualification,
      message,
    } = req.body;

    const resumeFile = req.file;

    if (!resumeFile) {
      return res.status(400).json({ error: "Resume file is required" });
    }

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service
      auth: {
        user: config.EMAIL_FROM,
        pass: config.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"BunnyTots Careers" ${config.EMAIL_FROM}`,
      to: config.EMAIL_TO,
      cc: config.EMAIL_CC_CAREERS,
      subject: `Career Application: ${position} - ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f8f8f8; padding: 20px; text-align: center; }
            .header h1 { margin: 0; color: #2c3e50; font-size: 24px; }
            .content { padding: 20px; background-color: #ffffff; border: 1px solid #e0e0e0; }
            .content h2 { color: #2c3e50; font-size: 20px; }
            .content p { margin: 10px 0; }
            .label { font-weight: bold; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #777; }
            .footer a { color: #2c3e50; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>BunnyTots Career Application</h1>
            </div>
            <div class="content">
              <h2>New Application for ${position}</h2>
              <p><span class="label">Full Name:</span> ${fullName}</p>
              <p><span class="label">Email:</span> ${email}</p>
              <p><span class="label">Phone:</span> ${phone}</p>
              <p><span class="label">Position:</span> ${position}</p>
              <p><span class="label">City:</span> ${city}</p>
              <p><span class="label">Location:</span> ${location}</p>
              <p><span class="label">Experience:</span> ${experience} years</p>
              <p><span class="label">Qualification:</span> ${qualification}</p>
              <p><span class="label">Message:</span> ${message || "N/A"}</p>
              <p><span class="label">Resume:</span> Attached (${
                resumeFile.originalname
              })</p>
            </div>
            <div class="footer">
              <p>This is an automated email from BunnyTots Careers. Please do not reply directly to this email.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      attachments: [
        {
          filename: resumeFile.originalname,
          path: resumeFile.path,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    // Delete resume from uploads folder after sending
    fs.unlinkSync(resumeFile.path);

    res
      .status(200)
      .json({ success: true, message: "Application sent successfully!" });
  } catch (error) {
    console.error("Error sending career application:", error);
    res.status(500).json({ error: "Failed to send application" });
  }
});

export default router;

//   <p><a href="https://www.bunnytots.com">www.bunnytots.com</a></p>

import express from "express";
import sendMail from "../utils/mail.js";
import franchiseMail from "../utils/franchiseMail.js";
import admissionMail from "../utils/addmissonFormMail.js";
import locationMail from "../utils/locationForm.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    await sendMail(req.body);
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

router.post("/franchise", async (req, res) => {
  try {
    await franchiseMail(req.body);
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

router.post("/admission", async (req, res) => {
  const { parentName, email, phone, childName, dob, program, address } =
    req.body;

  const subject = "New Admission Form Submission";

  try {
    await admissionMail({
      parentName,
      email,
      phone,
      childName,
      dob,
      program,
      address,
      subject,
    });

    res
      .status(200)
      .json({ message: "✅ Form submitted and email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending mail:", error);
    res
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
});

router.post("/location", async (req, res) => {
  try {
    await locationMail(req.body);
    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

export default router;

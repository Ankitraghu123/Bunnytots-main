import Syllabus from "../models/syllabus.models.js";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create syllabus
export const createSyllabus = async (req, res, next) => {
  try {
    const { classes, subject, syllabus: syllabusContent, accessPin } = req.body;

    console.log(accessPin, "LION");

    const documents = req.files.map((file) => file.filename); // Save file names

    const existing = await Syllabus.findOne({ subject });
    // const existing = await Syllabus.findOne({ classes, subject });
    if (existing) {
      return res.status(400).json({
        message: "Syllabus already exists for this class and subject",
      });
    }

    const newSyllabus = await Syllabus.create({
      classes,
      subject,
      syllabus: syllabusContent,
      documents,
      accessPin,
    });

    res.status(201).json({
      message: "Syllabus created successfully",
      syllabus: newSyllabus,
    });
  } catch (error) {
    next(error);
  }
};

// Get all syllabi
export const getAllSyllabus = async (req, res, next) => {
  try {
    const syllabusList = await Syllabus.find();
    res.status(200).json({ success: true, syllabus: syllabusList });
  } catch (error) {
    next(error);
  }
};

// Get filtered syllabus by class and subject
export const getFilteredSyllabus = async (req, res, next) => {
  try {
    const { classes, subject } = req.query;

    const filters = {};
    if (classes) filters.classes = classes;
    if (subject) filters.subject = subject;

    const result = await Syllabus.find(filters);
    res.status(200).json({ success: true, syllabus: result });
  } catch (error) {
    next(error);
  }
};

// Update syllabus by ID
export const updateSyllabus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Syllabus.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Syllabus not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Syllabus updated", syllabus: updated });
  } catch (error) {
    next(error);
  }
};

// Delete syllabus by ID

export const deleteSyllabus = async (req, res, next) => {
  try {
    const { id } = req.params;

    const syllabus = await Syllabus.findById(id);
    if (!syllabus) {
      return res.status(404).json({ message: "Syllabus not found" });
    }

    // Delete associated files
    if (syllabus.documents && syllabus.documents.length > 0) {
      syllabus.documents.forEach((filename) => {
        const filePath = path.join(__dirname, "../uploads", filename);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath); // Synchronously delete file
        }
      });
    }

    // Delete syllabus record
    await Syllabus.findByIdAndDelete(id);

    res.status(200).json({ message: "Syllabus and associated files deleted" });
  } catch (error) {
    next(error);
  }
};

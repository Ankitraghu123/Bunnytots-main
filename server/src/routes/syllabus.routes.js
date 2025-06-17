import express from "express";

import { isAuthenticated, isAdmin } from "../middleware/auth.middleware.js";

import {
  createSyllabus,
  getAllSyllabus,
  getFilteredSyllabus,
  updateSyllabus,
  deleteSyllabus,
} from "../controller/syllabus.ctrl.js";
import upload from "../middleware/multer.js";

const router = express.Router();

// CREATE
router.post(
  "/",
  isAuthenticated,
  isAdmin,
  upload.array("documents", 5),
  createSyllabus
);

// READ ALL
router.get("/", getAllSyllabus);

// FILTERED READ
router.get("/search", getFilteredSyllabus);

// UPDATE
router.put("/:id", isAuthenticated, isAdmin, updateSyllabus);

// DELETE
router.delete("/:id", isAuthenticated, isAdmin, deleteSyllabus);

export default router;

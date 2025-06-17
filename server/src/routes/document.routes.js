// routes/documentRoutes.js
import express from "express";
const router = express.Router();

import {
  getAllDocuments,
  uploadDocument,
  deleteDocument,
} from "../controller/document.ctrl.js";
import upload from "../middleware/multer.js";

// GET all documents
router.get("/", getAllDocuments);

// POST a new document
router.post("/", upload.single("file"), uploadDocument);

// DELETE /api/documents/:id
router.delete("/:id", deleteDocument);

export default router;

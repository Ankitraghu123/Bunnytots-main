import Document from "../models/Document.js";

// GET all documents
export const getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.find().sort({ year: -1 });
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch documents" });
  }
};

// POST a new document
export const uploadDocument = async (req, res) => {
  try {
    const { year } = req.body;
    const file = req.file;

    if (!file || !year) {
      return res.status(400).json({ error: "File and year are required" });
    }

    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${
      file.filename
    }`;

    const newDoc = new Document({
      filename: file.originalname,
      fileUrl,
      year,
    });

    await newDoc.save();

    res.status(201).json({ message: "Document uploaded", document: newDoc });
  } catch (err) {
    res.status(500).json({ error: "Failed to upload document" });
  }
};

export const deleteDocument = async (req, res) => {
  try {
    const { id } = req.params;

    const document = await Document.findById(id);
    if (!document) {
      return res.status(404).json({ message: "Document not found" });
    }

    // Optional: Delete the actual file from storage (if needed)

    await Document.findByIdAndDelete(id);

    res.status(200).json({ message: "Document deleted successfully", id });
  } catch (error) {
    console.error("Delete error:", error.message);
    res.status(500).json({ message: "Server error while deleting document" });
  }
};

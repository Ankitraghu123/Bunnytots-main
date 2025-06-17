import mongoose from "mongoose";

const syllabusSchema = mongoose.Schema(
  {
    classes: {
      type: String,
      trim: true,
      required: [true, "Class is required"],
    },
    subject: {
      type: String,
      trim: true,
      required: [true, "Subject is required"],
    },
    syllabus: {
      type: String,
      trim: true,
      required: [true, "Syllabus is required"],
    },
    accessPin: {
      type: String,
      trim: true,
      required: [true, "Syllabus is required"],
    },
    documents: {
      type: [String],
      default: [],
      //   required: [true, "Class is required"],
    },
  },
  { timestamps: true }
);

const syllabus = mongoose.model("Syllabus", syllabusSchema);

export default syllabus;

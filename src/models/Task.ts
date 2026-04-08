import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Applied", "Phone Screen", "Interview", "Offer", "Rejected"],
      default: "Applied",
    },
    dateApplied: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;

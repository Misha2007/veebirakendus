import mongoose from "mongoose";

const comment = new mongoose.Schema({
  date: {
    required: true,
    type: Date,
  },
  content: {
    required: true,
    type: String,
  },
});

export default mongoose.model("Comment", comment);

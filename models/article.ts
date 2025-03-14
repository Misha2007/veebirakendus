import mongoose from "mongoose";

const article = new mongoose.Schema({
  header: {
    required: true,
    type: String,
  },
  content: {
    required: true,
    type: String,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

export default mongoose.model("Article", article);

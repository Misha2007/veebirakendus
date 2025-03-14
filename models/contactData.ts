import mongoose from "mongoose";

const ContactData = new mongoose.Schema({
  address: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
});

export default mongoose.model("ContactData", ContactData);

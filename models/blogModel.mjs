import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    
    required: true,
  },
});
export default mongoose.model("Blog", blogSchema);

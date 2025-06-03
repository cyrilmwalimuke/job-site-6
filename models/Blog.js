import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
  featured: { type: Boolean, required: true},


}, { timestamps: true });

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

// models/SearchTerm.js
import mongoose from 'mongoose';

const SearchTermSchema = new mongoose.Schema({
  term: { type: String, required: true },
  count: { type: Number, default: 1 },
  link: { type: String }
});

SearchTermSchema.index({ term: 1 }, { unique: true });

export default mongoose.models.SearchTerm || mongoose.model('SearchTerm', SearchTermSchema);

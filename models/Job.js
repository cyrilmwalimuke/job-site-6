import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  employer_name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  salary: { type: Number, default: null },
  expiry: Date,
  type: { type: String }, // e.g., Full-time, Part-time
  experience: { type: String }, // e.g., Entry, Mid, Senior
  responsibilities: { type: String },
  education_qualification_experience_skills_traits: { type: String },
  fields: { type: [String], default: [] },
  applicationMethod: { type: String, enum: ['url', 'email'], default: 'url' },
  applicationValue: { type: String },
  companyWebsite: { type: String },
  employer_logo: { type: String },
  applicationInstructions: { type: String, default: '' },
  deadline:{ type: String, default: '' }

}, { timestamps: true });

export default mongoose.models.Job || mongoose.model('Job', JobSchema);


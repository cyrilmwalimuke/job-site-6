import mongoose from 'mongoose'

const wishSchema = new mongoose.Schema({
  title: { type: String, required: true },
  employer_name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  salary: { type: Number, default: null },
  type: { type: String }, // e.g., Full-time, Part-time
  experience: { type: String }, // e.g., Entry, Mid, Senior
  responsibilities: { type: String },
  education_qualification_experience_skills_traits: { type: String },
  fields: { type: [String], default: [] },
  applicationMethod: { type: String, enum: ['url', 'email'], default: 'url' },
  applicationValue: { type: String },
  companyWebsite: { type: String },
  employer_logo: { type: String }
}, { _id: false }, {timestamps:true}) // optional: disable _id for subdocs

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  isAdmin: { type: Boolean, default: false },
  wishItems: { type: [wishSchema], default: [] }
}, { timestamps: true })

// Avoid model overwrite error in dev
export default mongoose.models.User || mongoose.model('User', userSchema)

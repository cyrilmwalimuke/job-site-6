import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  averageBaseSalry: { type: Number, required: true },
  logo:{type:String,required: true}

}, {timestamps: true}
);

const salarySchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  salariesReported:{ type: Number, required: true },
  highDemand:{type:Boolean,required:true,default:false},
  percentageIncrease:{ type: Number, required: true },
  averageBaseSalary:{ type: Number, required: true },
  lowestBaseSalary:{ type: Number, required: true },
  HighestBaseSalary:{ type: Number, required: true },
  topPayingCompanies: { type: [companySchema], default: [],required:true}
  
}, { timestamps: true });

export default mongoose.models.Salary || mongoose.model('Salary', salarySchema);

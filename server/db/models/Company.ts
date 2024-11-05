// server/db/models/Company.ts
import mongoose from 'mongoose';

const JobOpeningSchema = new mongoose.Schema({
  jobtitle: String,
  url: String,
});

const CompanySchema = new mongoose.Schema(
  {
    url: String,
    name: String,
    openings: [JobOpeningSchema],
    openingsurl: String,
  },
  { collection: 'companies' } // Specify the collection name here
);

const Company = mongoose.models.Company || mongoose.model('Company', CompanySchema);

export default Company;

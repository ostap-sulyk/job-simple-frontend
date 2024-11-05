import Company from "~/server/db/models/Company";
import connectToDatabase from "~/server/db/models/connection";

export default defineEventHandler(async (event) => {
  await connectToDatabase();
  const companyData = await Company.findOne();
  return companyData;
});

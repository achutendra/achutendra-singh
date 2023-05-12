import mongoose from 'mongoose';
import autoIncrement from "mongoose-auto-increment";

const companySchema = new mongoose.Schema({
  name: String,
  url: String,
});

// Initialize auto-increment plugin
autoIncrement.initialize(mongoose.connection);

// Apply auto-increment plugin to the companySchema
companySchema.plugin(autoIncrement.plugin, {
  model: 'Company',
  field: '_id',
  startAt: 1,
  incrementBy: 1
});

const Company = mongoose.model('Company', companySchema);
export default Company;
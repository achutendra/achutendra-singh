import mongoose from 'mongoose';
import autoIncrement from "mongoose-auto-increment";

const adSchema = new mongoose.Schema({
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  primaryText: String,
  headline: String,
  description: String,
  CTA: String,
  imageURL: String,
});

// Initialize auto-increment plugin
autoIncrement.initialize(mongoose.connection);

// Apply auto-increment plugin to the adSchema
adSchema.plugin(autoIncrement.plugin, {
  model: 'Ad',
  field: '_id',
  startAt: 1,
  incrementBy: 1
});

const Ad = mongoose.model('Ad', adSchema);
export default Ad;
import mongoose from 'mongoose';
const {Schema}=mongoose

const contactSchema=new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  company: { type: String, required: true },
  jobTitle: { type: String, required: true },
});

export const Contact= mongoose.model('Contact', contactSchema);

import mongoose from 'mongoose';

let StaffSchema = new mongoose.Schema({
  fullName: {type: String},
  contacts: {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
      index: true, 
    },
    address: { type: String, required: 'Address is required' },
    phone: { type: String, trim: true, lowercase: true, unique: true, required: 'Phone number is required' },
    tg: { type: String, trim: true, lowercase: true, unique: true },
  },
  birthday: { type: Date, required: 'Birthday is required' },
  hireDate: { type: Date, required: 'Hire date is required' },
  department: { type: String, required: 'Department is required', index: true },
  position: { type: String, required: 'Position is required', index: true },
})
StaffSchema.index({fullName: 'text'});

export default mongoose.model('Staff', StaffSchema)
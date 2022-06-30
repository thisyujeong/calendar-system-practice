import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  tasks: [
    {
      date: { type: String, required: true },
      task: [
        {
          text: { type: String, required: true },
          checked: { type: Boolean, required: true },
        },
      ],
    },
  ],
});

export default mongoose.models.User || mongoose.model('User', TaskSchema);

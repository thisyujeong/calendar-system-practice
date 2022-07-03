import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  tasks: [
    {
      date: { type: Date, required: true },
      task: [
        {
          text: { type: String, required: true },
          checked: { type: Boolean, required: true },
        },
      ],
    },
  ],
});

export default mongoose.models.Task || mongoose.model('Task', TaskSchema);

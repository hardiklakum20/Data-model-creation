import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Time stap is use to the where it's created, or where it's is updated with date and time

export const Category = mongoose.model('Category', categorySchema);

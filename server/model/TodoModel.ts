import mongoose from 'mongoose';

// Develop a structure in Database
const TodoSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, 'Please Enter Something'],
        },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('Todo', TodoSchema);

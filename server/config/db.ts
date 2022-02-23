import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
    try {
        const conn = await mongoose.connect(
            'mongodb+srv://HardikS:hardik6869@cluster0.sixsh.mongodb.net/TodoReact?retryWrites=true&w=majority',
        );
        console.log(`Mongodb Connected : ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;

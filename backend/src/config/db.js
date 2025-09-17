import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database is connected: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("Failed to connect database", error);
        process.exit(1);
    }
}

export default connectDb;
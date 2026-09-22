import mongoose from "mongoose";

export const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONNECTED SUCCESSFULLY!");

    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1); // Exit with failure while 0 means success
    }
}
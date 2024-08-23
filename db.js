import mongoose from "moongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://vanisriannamalai07:8rktJZ30XZpvihHz@cluster0.8bhiw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Mongodb connected...");
    }
    catch(error){
        console.error(error.message);
        process.exit(1);
    }
}
export default connectDB;
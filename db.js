import mongoose from "moongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://vanisri026:Yam1DzDTRkl2Bsc5@cluster0.uh0yz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    }
    catch(error){
        console.error(error.message);
        process.exit(1);
    }
}
export default connectDB;
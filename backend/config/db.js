import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://chaitanya:chaitanya@cluster0.ynufb.mongodb.net/foodify")
    .then(()=>console.log("DB connected"))
}
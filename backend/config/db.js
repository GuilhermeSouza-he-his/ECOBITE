import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://guilhermecode:33858627@cluster0.tumb45d.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
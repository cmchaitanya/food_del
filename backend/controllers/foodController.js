import foodModel from "../models/foodModel.js";
import fs from 'fs' //file system prebuilded in node
import validator from "validator"
//add food item
const addFood=async(req,res)=>{
    let image_filename=`${req.file.filename}`;
    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"ERROR"})
    }
}

// all food list
const listFood = async (req,res)=>{
    try {
        const foods=await foodModel.find({});
        res.json({success:true,data:foods});
    } catch (error) {
        console.log("ERROR");
        res.json({success:false,message:"ERROR"});
    }
}

//remove food item
const removeFood=async(req,res)=>{
    try {
        const food=await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{}) //delete from folder
        await foodModel.findByIdAndDelete(req.body.id); //delete from database
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log("ERROR")
        res.json({success:false,message:"ERROR"});
    }
}
export {addFood,listFood,removeFood}
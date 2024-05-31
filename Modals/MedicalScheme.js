import mongoose from "mongoose";



const scheme = new mongoose.Schema({

    firstname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    fathername:{
        type:String,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    select:{
        type:String,
        required:true,
    },
    radio:{
        type:String,
        required:true
    },
    nic:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
});



const MedicalModal = mongoose.model("medical", scheme);
export default MedicalModal;
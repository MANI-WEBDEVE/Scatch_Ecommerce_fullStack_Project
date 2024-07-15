import mongoose from "mongoose";


const userSchema = new mongoose.Schema ({
    fullname: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true,
        unique:true
    },
    contact: {
        type:Number,
        required:true,
        unique:true
    },
    cart: {
        type:Array,
        default: []
    },
    order: {
        type:Array,
        default: []
    },
    isAdmin: {
        type:Boolean
    },
    picture: {
        type:String
    }
    
})

export const User = mongoose.model('user', userSchema)
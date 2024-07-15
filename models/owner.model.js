import { Schema } from "mongoose";
import * as mongoose from 'mongoose';

const OwnerSchema = new Schema({
  fullname: {
    type: String,
    minlength: 4,
    trim: true,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
    trim: true,
    unique: true
  },

  password: {
    type: String,
    // required: true,
    minlength: 6,
    trim: true,
    unique:true
  },
  picture: {
    type: String,
  },
  product:{
    type:Array,
    default:[]
  },
  gstin: {
    type:String,
  }

});

export const OwnerModel = mongoose.model("owner", OwnerSchema);

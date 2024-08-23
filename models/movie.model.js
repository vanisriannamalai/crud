import { Schema,model } from "mongoose";
//write the schema
const schema=new Schema({
    title:String,
    desc:String
})

//create your model
const movie=model("Movie schema");

export default movie;
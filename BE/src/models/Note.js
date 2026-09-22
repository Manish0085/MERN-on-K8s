import mongoose from "mongoose";

//1-create a schema
//2-create a model using the schema

const noteSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
},
{timestamps:true}
);//this will automatically add createdAt and updatedAt

const Note=mongoose.model("Note",noteSchema);

export default Note;
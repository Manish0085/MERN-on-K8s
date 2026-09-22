import express from "express";
//const express=require("express");
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

//local imports
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app=express();
const PORT=process.env.PORT || 5001;
const __dirname=path.resolve();

if(process.env.NODE_ENV!=="production"){
    app.use(
        cors({
        origin:"http://localhost:5173",
    }))
}

//middleware, add before routes
app.use(express.json());
app.use((req,res,next)=>{
    console.log(`WE JUST GOT A NEW REQUEST!!`);
    console.log(`Request method is ${req.method} & Request URL is ${req.url}`);
    next();
});

//ratelimiter
app.use(rateLimiter);

app.use("/api/notes",notesRoutes);
//endpoint is a combination of URL+HTTP method that lets the client interact w specific resources on the server.

// app.get("/api/notes",(req,res)=>{
//     res.status(200).send("You got 15 notes");
// });

// app.post("/api/notes",(req,res)=>{
//     res.status(201).json({message:"post created successfully"});
// });
// app.put("/api/notes/:id",(req,res)=>{
//     res.status(200).json({message:"post updated successfully"});
// });
// app.delete("/api/notes/:id",(req,res)=>{
//     res.status(200).json({message:"post deleted successfully"});
// });
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../FE/dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../FE","dist","index.html"));
    });  
}

connectDB().then(()=>{ //run only if db connected
    app.listen(PORT,()=>{
        console.log(`server is running on PORT:`,PORT)
    });
});
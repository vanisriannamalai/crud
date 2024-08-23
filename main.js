import express from "express";
import movieRoutes from "./routes/users.js";
import connectDB  from "./lib/db.js";

const app=express();
const PORT=6969;

//data understanding middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connect DB
connectDB();
 
app.get('/',(req,res)=>{
    res.json({msg:"Hello students"});
})

//CRUD functiinalaity
app.use("/movies",movieRoutes);

app.listen(PORT,()=>{
    console.log(`The server is running at http://localhost:${6969}`);
})

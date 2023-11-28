import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import usersRoutes from "./routes/usersRoutes.js";

const app = express();
//process JSON info
app.use(express.json())
//stablish ENV variables
dotenv.config();
//connect to database
connectDB();
//routing
app.use('/api/usuarios', usersRoutes)
  
const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`);
});


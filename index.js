import express from "express";
// import routes from "./Routes/index.js"
// import cors from "cors";
// import mongoose from 'mongoose';
// import { DB_URL }from "./DBConnect/Database.js";


const app = express();
const PORT = 5000;


// mongoose.connect(DB_URL)
// mongoose.connection.on("connected", () => console.log("mongose connect"));
// mongoose.connection.on("error", (err) => console.log("error mongo", err));



// app.use(express.json());
// app.use(express.urlencoded({ extended: true}));
// app.use(cors());



// //middleware as routes api
// app.use("/api", routes);


app.get("/", (req,res) => {
   res.send("server is running  ")
});


app.listen(PORT, () => {
   console.log(`Server is running on https://localhost: ${PORT}`)

 })

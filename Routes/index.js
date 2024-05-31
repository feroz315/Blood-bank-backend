import express from "express";
import { UserLogin,UserSignup } from "../Controllers/Auth.js";



const routes = express.Router();



routes.post("/signup", UserSignup);
routes.post("/login", UserLogin);




export default routes;


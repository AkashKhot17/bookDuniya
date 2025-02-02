import express from "express";

import { Signup,login } from "../controller/user.controller.js"; 

const router=express.Router();
router.post("/signup",Signup);
router.post("/login", login);
export default router;
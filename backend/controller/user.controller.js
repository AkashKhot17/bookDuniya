    import User from "../modal/user.modal.js";
    import bcryptjs from "bcryptjs";

    export  const Signup =async (req,res)=>{
            try{
                const {fullname,email,password}=req.body;
                const user=await User.findOne({email});
                    if(user){
                        //bad request
                   return  res.status(400).json({msg: "user Already Exits"});
                    }
                    const hashedPassword=await bcryptjs.hash(password,10);
                    const createdUser=new User({
                        fullname: fullname,
                        email: email,
                        password:  hashedPassword,
                    });
                   await createdUser.save();
                   console.log("User Created Succefully!");
                  
                   return res.status(201).json({ msg: "Signup successful", user: createdUser });
            }
            catch(error){
                console.log("error",error.message);
              return  res.status(500).json({msg: "Internal Server Error"});
            }
    }

    export const login = async (req,res)=>{

        try{
            const {email,password}=req.body;
    const user = await User.findOne({email});
    const isMatch= await bcryptjs.compare(password,user.password);
    if(!user || !isMatch){
        res.status(400).json({msg: "Invalid username or password"});
    }
    else{
        res.status(200).json({msg: "Login Successful!",user:{
            _id: user._id,
            fullname: user.fullname,
            email: user.email
        }});
    }
        }catch(error){
            console.log("error",error.message);
            return  res.status(500).json({msg: "Internal Server Error"});
        }
    

    }
import React from 'react'
import Login from './Login'
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from 'react-hot-toast';

function Signup() {
    const navigate=useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const dataGot={
                fullname: data.fullname,
                email: data.email,
                password: data.password

        };
        console.log(data);
        await axios.post("http://localhost:4001/user/signup",dataGot)
        .then((res)=>{
console.log(res.data);
if(res.data){
    toast.success("signup successful");
 
}
setTimeout(() => {
    navigate("/");  // Navigate to home after success
}, 1000);
localStorage.setItem("User",JSON.stringify(res.data.user));
  
        })
        .catch((err)=>{
                // console.log(err.message);
                // alert("failed to signup");

                if (err.response && err.response.status === 400) {
                    toast.error(err.response.data.msg);
                   // Show "User Already Exists"
                } else {
                    toast.error("Failed to login"); // Generic error
                }
        })
    }; // This will now log email and password

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='border-[2px] shadow-md p-4 rounded-md'>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} method="div">
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-lg">Signup</h3>

                        {/* Name */}
                        <div className='mt-4 space-y-2'>
                            <span>Name</span>
                            <br />
                            <input type='text' placeholder='Enter Your FullName' className='w-80 border rounded-md outline-none' {...register("fullname", { required: "Name is required" })}></input>
                            {errors.fullname  && <p className="text-red-500">{errors.name.message}</p>}
                        </div>

                        {/* Email */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type='email' placeholder='Enter Your Email' className='w-80 border rounded-md outline-none' {...register("email", { required: "Email is required" })}></input>
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>

                        {/* Password */}
                        <div className='mt-4 space-y-2  dark:bg-slate-900 dark:text-black'>
                        <span className='dark:text-white'>Password</span>
                            <br />
                            <input type='password' placeholder='Enter Your Password' className='w-80 border rounded-md outline-none' {...register("password", { required: "Password is required" })}></input>
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>

                        <div className='flex justify-around mt-6 items-center'>
                            <button className='bg-pink-500 text-white hover:bg-opacity-80 cursor-pointer border rounded-xl px-3 py-2'>Signup</button>
                            <p>Have an Account?{" "}
                                <button className='cursor-pointer underline text-blue-600' onClick={() => document.getElementById("my_modal_3").showModal()} type="button">Login</button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <Login />
        </div>
    )
}

export default Signup;

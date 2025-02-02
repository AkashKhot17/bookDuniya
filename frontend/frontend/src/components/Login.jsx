import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from 'react-hot-toast';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const dataGot={
          
            email: data.email,
            password: data.password

    };
    console.log(data);
    await axios.post("http://localhost:4001/user/login",dataGot)
    .then((res)=>{
console.log(res.data);
if(res.data){
    toast.success("Login successful");
 
}
document.getElementById("my_modal_3").close();
setTimeout(()=>{
    window.location.reload();

},3000);

localStorage.setItem("User",JSON.stringify(res.data.user));
    })
    .catch((err)=>{
            // console.log(err.message);
            // alert("failed to signup");

            if (err.response && err.response.status === 400) {
                toast.error(err.response.data.msg);
                // Show "User Already Exists"
            } else {
                toast.error("Failed to login");
                  // Generic error
            }
    })
    }; // This will now log email and password

    return (
        <div>
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box  dark:bg-slate-900 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* Close Button */}
                        <Link
                            to="/"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            ✕
                        </Link>

                        <h3 className="font-bold text-lg">Login</h3>

                        {/* Email Field */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input 
                                type='email'
                                placeholder='Enter Your Email'
                                className='w-80 border rounded-md outline-none p-2'
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>

                        {/* Password Field */}
                        <div className='mt-4 space-y-2  dark:bg-slate-900 dark:text-black'>
                            <span className='dark:text-white'>Password</span>
                            <br />
                            <input 
                                type='password'
                                placeholder='Enter Your Password'
                                className='w-80 border rounded-md outline-none p-2'
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>

                        {/* Submit Button (Inside Form) */}
                        <div className='flex justify-around mt-6 items-center'>
                            <button 
                                type="submit"  // Important! This triggers the form submission
                                className='bg-pink-500 text-white hover:bg-opacity-80 cursor-pointer border rounded-xl px-3 py-2'
                            >
                                Login
                            </button>
                            <p>
                                Not Registered?{" "} 
                                <Link to="/signup" className='cursor-pointer underline text-blue-600'>SignUp</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;

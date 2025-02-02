import React from 'react'
import { useAuth } from '../context/Authprovider';
import toast from 'react-hot-toast';
function Logout() {
    const [authUser,setAuthUser]=useAuth();
      console.log(authUser);
      const handleLogout=()=>{
        try{
                setAuthUser(null);
                toast.success("Logout successful");
                localStorage.removeItem('User');

                setTimeout(()=>{
                    window.location.reload();
                },3000);
                 
                

        }catch(err){
            toast.error("Failed to logout",err);
        }
      }
  return (
    <div>
        <button className='px-3 py-2 bg-red-500 rounded-md cursor-pointer text-white' onClick={handleLogout}>Logout</button>
      
    </div>
  )
}

export default Logout;

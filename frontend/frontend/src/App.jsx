  
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import  { Toaster } from 'react-hot-toast'; 

import Courses from './courses/Courses'
import Signup from './components/signup'
import { useAuth } from './context/Authprovider';
 
 
 
 
 const App = () => {  
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);

   return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={authUser?<Courses/>:<Navigate to="../signup" /> } /> 
      <Route path='/signup' element={<Signup/> }/>
     </Routes>
   

     <Toaster />
   
    </>

   )
 }
 
 export default App
 
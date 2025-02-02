import React, { useEffect, useState } from 'react'
 
import {Link} from "react-router-dom"
import Cards from './Cards'
import axios from "axios";
 
const Course = () => {


  const [book,setBook]=useState([]);
   useEffect(()=>{
    
      try{
        const getBook= async ()=>{
        const res=await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
       
      } 
      getBook();
    }catch(error){

  console.log("error,error");
      }
    },[])

  return (
    <>
      <div className='max-w-screen-2xl mx-auto px-4 md:px-20 container   '>
        <div className=' items-center justify-center text-center mt-32   '>
        <h1 className='text-2xl md:text-4xl '> We're delighted to have you <span className='text-pink-400'>Here :)</span></h1>
       <p className='mt-12'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!</p>
            <Link to={"/"}>
            <button className='bg-pink-500 text-white brounded-xl hover:bg-pink-700 cursor-pointer px-3 py-2 mt-4 rounded-xl'>Back</button>
            </Link>
            
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3  '>
            {book.map((item)=>(
                    <Cards item={item} key={item.id}/>
            ))}
        </div>
       </div>
    </>
    
  )
}

export default Course;

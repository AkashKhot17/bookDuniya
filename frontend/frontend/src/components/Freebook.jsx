import React, { useEffect, useState } from 'react'
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

function Freebook() {

  const [book,setBook]=useState([]);
  useEffect(()=>{
   
     try{
       const getBook= async ()=>{
       const res=await axios.get("http://localhost:4001/book");
      
       const dat=res.data;
       const filteredData=dat.filter((data)=>
        data.category==="free"
        );
        console.log(filteredData);
       setBook(filteredData);
      
     } 
     getBook();
   }catch(error){

 console.log("error,error");
     }
   },[])


   
//   console.log(filteredData);
     
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

  return (
  <div>
    <div className="max-w-screen-2xl mx-auto px-4 md:px-20 container ">
       <div id="above-cards">
       <h3 className="font-semibold text-xl mt-3">Free Offered Courses</h3>
       <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla non suscipit, iure neque earum?</p>
       </div>
        
  
    <div id="cards-slider" className="items-center sm:pl-2">
    <Slider {...settings}>
    {book.map((item) => (
    <Cards item={item} key={item.id} />
))}
    
      </Slider>
    </div>
    </div>
  </div>
  );
}

export default Freebook;

import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import RecentProduct from '../RecentProduct/RecentProduct';
import { Link } from 'react-router-dom';
import {FaBullseye,FaTags,FaPalette,FaTshirt,FaLayerGroup,FaCogs,} from "react-icons/fa";


export default function WelcomePage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
    
    <div className="min-h-screen w-full bg-gradient-to-tr from-black via-gray-900 to-amber-200 flex flex-col items-center justify-center px-4 py-8 space-y-6">
      {/* Start now button */}
    <Link to="/RecentProduct">
    <button  className="text-white  bg-[#826300] hover:bg-[#eec233] text-lg px-8 py-3 rounded-full shadow-lg">
      Start now
    </button>
    </Link>
   
    {/* Project Goal */}
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-3xl">
      <div className="flex items-center space-x-3 mb-3">
        <div className="bg-green-500 text-white rounded-full p-2">
          <FaBullseye className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Project Goal</h2>
      </div>
      <p className="text-gray-600">
        This application helps you find the most similar product in our database based on your input (brand, color, type, etc.) using machine learning.
      </p>
    </div>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
      {/* Brand Card */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <div className="flex items-center space-x-2 mb-2">
          <div className="bg-gray-100 p-2 rounded-md">
            <FaTags className="text-gray-600 w-5 h-5" />
          </div>
          <h3 className="font-semibold text-gray-800">Supported Brands</h3>
        </div>
        <ul class="list-disc text-left space-x-3 flex justify-around list-inside text-gray-600">
       <ul>
       <span></span>
        <li>nike</li>
        <li>adidas</li>
        <li>Puma</li>
        <li>dior</li>
        <li>lacoste</li>
       <li>Zara</li>   
       <li>h&m</li>  
       </ul>
         <ul>
        <li>gap</li>
        <li>armani</li>
        <li>pull&bear</li>
       <li>gucci</li>
       <li>forever21</li>
         <li>levis</li>
         </ul>
       </ul>
      </div>
  
      {/* Colors Card */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <div className="flex items-center space-x-2 mb-2">
          <div className="bg-gray-100 p-2 rounded-md">
            <FaPalette className="text-gray-600 w-5 h-5" />
          </div>
          <h3 className="font-semibold text-gray-800">Supported Colors</h3>
        </div>
        <ul class="list-disc text-left space-x-3 flex justify-around list-inside text-gray-600">
       <ul>
       <span></span>
       <li>Red </li>
        <li>Blue </li>
        <li>Green</li>
        <li>Yellow</li>
      
       </ul>
         <ul>
         <li>purple</li>
         <li>Black </li>
        <li>White </li>
        <li>brown</li>
         </ul>
       </ul>
      </div>
  
      {/* Types Card */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <div className="flex items-center space-x-2 mb-2">
          <div className="bg-gray-100 p-2 rounded-md">
            <FaTshirt className="text-gray-600 w-5 h-5" />
          </div>
          <h3 className="font-semibold text-gray-800">Supported Types</h3>
        </div>

        <ul class="list-disc text-left space-x-3 flex justify-around list-inside text-gray-600">
       <ul>
       <span></span>
       <li>shirt</li>
       <li>shoes</li>
       <li>pants</li>
      
       </ul>
         <ul>
       
  <li>dress</li>
     <li>jacket</li>
         </ul>
       </ul>
       
      </div>
  
      {/* Materials Card */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <div className="flex items-center space-x-2 mb-2">
          <div className="bg-gray-100 p-2 rounded-md">
            <FaLayerGroup className="text-gray-600 w-5 h-5" />
          </div>
          <h3 className="font-semibold text-gray-800">Supported Materials</h3>
        </div> 
        <ul class="list-disc text-left space-x-3 flex justify-around list-inside text-gray-600">
       <ul>
       <span></span>
          <li>leather</li>
          <li>denim</li>
       </ul>
         <ul>
            <li>cotton</li>
           <li>polyester</li>
         </ul>
       </ul>
      </div>
    </div>
  
    {/* How it works */}
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-3xl space-y-4">
      <div className="flex items-center space-x-2">
        <FaCogs className="text-gray-700 w-6 h-6" />
        <h3 className="text-xl font-semibold text-gray-800">How It Works</h3>
      </div>
      <ol className="list-decimal list-inside text-gray-600 space-y-1">
        <li>Input product specs</li>
        <li>Send to API</li>
        <li>ML matching</li>
        <li>Display result</li>
      </ol>
    </div>
 
  </div>
    </>
  

  );
}


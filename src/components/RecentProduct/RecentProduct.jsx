import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import * as yup from "yup"
import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


export default function RecentProduct() {

const [price, setprice] = useState()
const [productUrls, setProductUrls] = useState(null);
const [loading, setloading] = useState(false)
const [ApiError, setApiError] = useState("")
const [showResult, setShowResult] = useState(false);
const [showLinks, setShowLinks] = useState(false);



function submitfun(values){
  setloading(true)
  console.log(values);
   axios.post(`https://pricehunter-production.up.railway.app/predict_price/`,values )
   .then((res)=>{
    console.log(res);
    setloading(false)
    const rawPrice = res.data.predicted_price;
    const resProductUrls = res.data.product_urls;
    

    const err = res.data.error;
    const roundedPrice = Math.round(rawPrice); // ← تحويله لرقم صحيح  
    setprice(roundedPrice);
    setApiError(err);
    setProductUrls(resProductUrls);
    setShowResult(true);

   })
 
 
}


function handleReset() {
  formik.resetForm();      // يمسح البيانات
  setShowResult(false);    // يخفي نتيجة السعر
  setprice(null);          // يمسح السعر
  seturl("");              // يمسح اللينك
  setApiError("");         // يمسح رسالة الخطأ (لو فيه)
}

let myValidation = yup.object().shape({
  type:yup.string().min(3,"min length is 3").max(20 ,"max length is 20").required("type is required"),
  color:yup.string().min(3,"min length is 3").max(20 ,"max length is 20").required("color is required"),
  brand:yup.string().min(3,"min length is 3").max(20 ,"max length is 20").required("brand is required"),
  material:yup.string().min(3,"min length is 3").max(20 ,"max length is 20").required("material is required"),
  style:yup.string().min(3,"min length is 3").max(20 ,"max length is 20").required("style is required"),
  state:yup.string().min(3,"min length is 3").max(20 ,"max length is 20").required("state is required")
});


let formik= useFormik({
  initialValues :
  { 
    type: "",
    color: "",
    brand: "",
    material: "",
    style: "",
    state: ""
},
validationSchema:myValidation ,
onSubmit : submitfun,
})

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


{/* 
    <Marquee pauseOnHover speed={100} gradient={true} className="text-xl font-semibold mb-5 text-gray-500">
    The price depends on the product condition, type, color, brand, material and state    </Marquee> */}
    
    <div className='w-full  ' >
    <div className="bg-gradient-to-br from-green-100 to-emerald-300 flex flex-col justify-center items-center text-center p-6">

<motion.h1
        className="text-5xl font-bold text-green-900 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      Welcome to <span className="text-emerald-700">Price Hunter</span> 🛍️
      </motion.h1>

      <motion.div
        className="max-w-xl mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Slider {...sliderSettings}>
          <div><p className="text-lg text-green-800">اكتشف السعر المثالي لمنتجك بكل سهولة</p></div>
          <div><p className="text-lg text-green-800">أدخل التفاصيل... واحصل على السعر المتوقع</p></div>
          <div><p className="text-lg text-green-800">سريع، ذكي، ودقيق 🔍</p></div>
        </Slider>
      </motion.div>
</div>
    <form onSubmit={formik.handleSubmit} className="w-full max-w-xl bg-slate-100  shadow-lg rounded-sm px-5 py-5 my-10 ps-0 mx-auto mt-10 space-y-4">
  
  
  <div className="flex items-center   space-x-0 ">
      <label htmlFor="type" className="  w-36  after:content-['*'] after:text-red-500 before:ml-1 text-xl text-gray-700">type</label>
    
      <input required name='type' value={formik.values.type} onChange={formik.handleChange} onBlur={formik.handleBlur} 
       type="text" id="type" className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2  focus:ring-blue-400 "/>
  </div>

{formik.errors.type && formik.touched.type ?        <div className="  text-sm text-red-800 " role="alert">
  <span className="font-medium  ">{formik.errors.type}</span> 
</div>:null}
  




  <div className="flex items-center space-x-0">
      <label htmlFor="color" className="  w-36  after:content-['*'] after:text-red-500 before:ml-1 text-xl text-gray-700">color</label>
      <input required name='color' value={formik.values.color} onChange={formik.handleChange} onBlur={formik.handleBlur}
       type="text" id="color" className="flex-1 p-2  border rounded-md focus:outline-none focus:ring-2  focus:ring-blue-400 "/>
  
  </div>
  {formik.errors.color && formik.touched.color ?        <div className="  text-sm text-red-800 " role="alert">
  <span className="font-medium ">{formik.errors.color}</span> 
</div>:null}
  
  <div className="flex items-center space-x-0 ">
      <label htmlFor="brand" className="  w-36  after:content-['*'] after:text-red-500 before:ml-1 text-xl text-gray-700">brand</label>
      <input required name='brand' value={formik.values.brand} onChange={formik.handleChange} onBlur={formik.handleBlur}
       type="text" id="brand" className="flex-1 p-2  border rounded-md focus:outline-none focus:ring-2  focus:ring-blue-400 "/>
  
  </div>
  {formik.errors.brand && formik.touched.brand?        <div className="  text-sm text-red-800 " role="alert">
  <span className="font-medium ">{formik.errors.brand}</span> 
</div>:null}
  
  <div className="flex items-center space-x-0">
      <label htmlFor="material" className="  w-36  after:content-['*'] after:text-red-500 before:ml-1 text-xl text-gray-700">material</label>
      <input required 
      name='material' value={formik.values.material} onChange={formik.handleChange} onBlur={formik.handleBlur}
      type="text" id="material" className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2  focus:ring-blue-400 "/>
 
  </div>
 {formik.errors.material && formik.touched.material ?       
  <div className="  text-sm text-red-800 " role="alert">
  <span className="font-medium ">{formik.errors.material}</span> 
</div>:null}
  
  <div className="mb-5 flex items-center  space-x-0">
  
      <label htmlFor="style" className=" w-36  after:content-['*'] after:text-red-500 before:ml-1 text-xl text-gray-700">style</label>
      <input required
       name='style' value={formik.values.style} onChange={formik.handleChange} onBlur={formik.handleBlur}
       type="text" id="style" className="flex-1 p-2  border rounded-md focus:outline-none focus:ring-2  focus:ring-blue-400 "/>
 
  </div>
 {formik.errors.style && formik.touched.style?        <div className="  text-sm text-red-800 " role="alert">
  <span className="font-medium ">{formik.errors.style}</span> 
</div>:null}
  <div className="flex  space-x-0 ">
      <label htmlFor="state" className=" w-36  after:content-['*'] after:text-red-500 before:ml-1 text-xl text-gray-700  ">state</label>


      <input required  name='state' value={formik.values.state} onChange={formik.handleChange} onBlur={formik.handleBlur}
       type="text" id="state" className="flex-1 p-2  border rounded-md focus:outline-none focus:ring-2  focus:ring-blue-400 "/>
  
  </div>
  
  {formik.errors.state  && formik.touched.state?        <div className="  text-sm text-red-800 " role="alert">
  <span className="font-medium ">{formik.errors.state}</span> 
</div>:null}
  

  <button type="submit" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium  rounded-lg text-lg w-auto mx-4 px-7 py-3 text-center">
     {loading?<i className='fas fa-spinner fa-spin'></i> : "Submit"}  </button>

     
     <button
  onClick={handleReset}
  className="mt-4 text-2xl text-gray-700 hover:text-gray-900 transition"
  title="Try Again"
>
  <i className="fas fa-rotate-right"></i>
</button>
     
</form>


{showResult && (
  <div className="my-6 p-6 bg-white rounded-2xl shadow-xl text-center w-1/2 mx-auto space-y-4">
    {ApiError ? (
      // ✅ في حالة وجود خطأ
      <p className="text-red-600 text-lg font-semibold">{ApiError}</p>
    ) : (
      // ✅ في حالة النجاح
      <>
        <h3 className="text-2xl font-semibold text-gray-700">
    The best predicted price:
  </h3>
  <p className="text-xl text-green-600 font-bold">{price} $</p>

  {productUrls ? (
  <div className="flex gap-3 items-center justify-center">
  {productUrls.lowest_price_link && (
          <a
            href={productUrls.lowest_price_link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-emerald-700 text-lg font-bold text-white hover:text-white rounded-xl hover:bg-emerald-800 transition duration-300"
          >
            🔻 Lowest Price Link
          </a>
        )}

    <button
      onClick={() => setShowLinks(!showLinks)}
      className="text-blue-600 font-semibold underline hover:text-blue-800 transition"
    >
      {showLinks ? "Hide" : "You might also like these products"}
    </button>

    {showLinks && (
      <>
      <div className='col-span-2 justify-center space-x-5 '>

    
        {productUrls.amazon_search_link && (
          <a
            href={productUrls.amazon_search_link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-orange-600 text-lg font-bold text-white hover:text-white rounded-xl hover:bg-orange-300 transition duration-300"
          >
            🛒 Amazon 
          </a>
        )}
        {productUrls.shein_search_link && (
          
          <a
            href={productUrls.shein_search_link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-pink-500 text-lg font-bold text-white hover:text-white rounded-xl hover:bg-pink-300 transition duration-300"
          >
            👗 Shein 
          </a>
        )}
      </div>
      </>
    )}
  </div>
) : (
  <p className="text-red-500">No links available</p>
)}

      </>
    )}
  </div>
)}
    </div>

    </>
  )
}

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
import bgr from '/src/assets/back2.png'
import bggr from '/src/assets/Rectangle.png'
import Navbar from '../Navbar/Navbar';



export default function RecentProduct() {


const [price, setprice] = useState()
const [productUrls, setProductUrls] = useState(null);
const [loading, setloading] = useState(false)
const [ApiError, setApiError] = useState("")
const [showResult, setShowResult] = useState(false);
const [showLinks, setShowLinks] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // محاكاة تحميل مثلاً 2 ثانية
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

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
  type:yup.string().min(3,"min length is 3").max(20 ,"max length is 20"),
  color:yup.string().min(3,"min length is 3").max(20 ,"max length is 20") ,
  brand:yup.string().min(3,"min length is 3").max(20 ,"max length is 20"),
  material:yup.string().min(3,"min length is 3").max(20 ,"max length is 20"),
  style:yup.string().min(3,"min length is 3").max(20 ,"max length is 20"),
  state:yup.string().min(3,"min length is 3").max(20 ,"max length is 20") 
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
validateOnChange: false, // ✅ ما يتحققش أثناء الكتابة
validateOnBlur: false, 
onSubmit : submitfun,
})

  return ( 
    <>


    
    <div
  style={{
    backgroundImage: `url(${bgr})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
  className='w-full relative min-h-screen m-0 p-0'
>
<Navbar/>
<h1 className="font-myfont absolute 
  top-56 left-[18%] text-5xl   // موبايل افتراضي
  sm:top-44 sm:left-[23%] sm:text-7xl  // تابلت صغير
  md:top-40 md:left-[21%] md:text-8xl  // تابلت أكبر
  lg:top-40 lg:left-[28.2%] lg:text-8xl  // شاشات متوسطة
  xl:top-40 xl:left-[32.8%] xl:text-8xl  // لابتوب وفوق
  font-medium text-white">
  Price Hunter
</h1>


  <div className=' mx-auto mt-40 p-16   min-h-[600px] rounded-xl shadow-2xl'  style={{
      
      maxWidth: '32.5rem',
      backgroundImage: `url(${bggr})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    
      }} >
      <h2 className='text-3xl font-bold  text-white'>
      Price Prdicion
      </h2>
          <h1 className=' text-white '>manual</h1>
  



   <div className={`transition duration-500 ${showResult ? 'blur-sm pointer-events-none' : ''}`}>

          <form
  onSubmit={formik.handleSubmit}
  className={`max-w-md mx-auto px-10 min-h-[500px] transition duration-300 ${
    showResult ? 'blur-sm pointer-events-none select-none' : ''
  }`}
>
{/* type */}

          <div className="relative z-0 w-full mb-5 group">
  <input
    type="text"
    name="type"
    id="type"
    required
    placeholder=" " 
    value={formik.values.type}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    className="peer block py-2.5 px-0 w-full text-xl text-white bg-transparent border-0 border-b-[1px] border-[#1E1E1E]  appearance-none dark:text-white dark:border-gray-600 focus:outline-none "
  />
  <label
    htmlFor="type"
    className="absolute text-lg text-white dark:text-gray-400 duration-300 transform top-0 left-0 origin-[0] scale-100 translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-valid:scale-75 peer-valid:-translate-y-4"
  >
    Type
  </label>

{formik.errors.type && formik.touched.type ?        <div className="  text-xl text-red-800 " role="alert">
  <span className="font-medium">{formik.errors.type}</span> 
</div>:null}
  
</div>




{/* color  */}
  <div className="relative z-0 w-full mb-5 group">
  <input
    type="text"
    name="color"
    id="color"
    required
    placeholder=" "
    value={formik.values.color}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    className="peer block py-2.5 px-0 w-full text-xl text-white bg-transparent border-0 border-b-[1px] border-[#1E1E1E] appearance-none  focus:outline-none "
  />
  <label
    htmlFor="color"
    className="absolute text-lg text-white dark:text-gray-400 duration-300 transform top-2 left-0 origin-[0] scale-100 translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-valid:scale-75 peer-valid:-translate-y-4"
  >
    Color
  </label>
  {formik.errors.color && formik.touched.color ?        <div className="  text-xl text-red-800 " role="alert">
  <span className="font-medium ">{formik.errors.color}</span> 
</div>:null}
  
</div>
{/* brand */}

<div className="relative z-0 w-full mb-5 group">
  <input
    type="text"
    name="brand"
    id="brand"
    required
    placeholder=" "
    value={formik.values.brand}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    className="peer block py-2.5 px-0 w-full text-xl text-white bg-transparent border-0 border-b-[1px] border-[#1E1E1E]  appearance-none dark:text-white dark:border-gray-600 focus:outline-none "
  />
  <label
    htmlFor="brand"
    className="absolute text-lg text-white dark:text-gray-400 duration-300 transform top-2 left-0 origin-[0] scale-100 translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-valid:scale-75 peer-valid:-translate-y-4"
  >
    Brand
  </label>
  {formik.errors.brand && formik.touched.brand?        <div className="  text-xl text-red-800 " role="alert">
  <span className="font-medium ">{formik.errors.brand}</span> 
</div>:null}
  
</div>
  {/* material */}
<div className="relative z-0 w-full mb-5 group">
  <input
    type="text"
    name="material"
    id="material"
    required
    placeholder=" "
    value={formik.values.material}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    className="peer block py-2.5 px-0 w-full text-xl text-white bg-transparent border-0 border-b-[1px] border-[#1E1E1E]  appearance-none dark:text-white dark:border-gray-600 focus:outline-none "
  />
  <label
    htmlFor="material"
    className="absolute text-lg text-white dark:text-gray-400 duration-300 transform top-2 left-0 origin-[0] scale-100 translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-valid:scale-75 peer-valid:-translate-y-4"
  >
    Material
  </label>
 {formik.errors.material && formik.touched.material ?       
  <div className="  text-xl text-red-800 " role="alert">
  <span className="font-medium ">{formik.errors.material}</span> 
</div>:null}
</div>



{/* style */}

<div className="relative z-0 w-full mb-5 group">
  <input
    type="text"
    name="style"
    id="style"
    required
    placeholder=" "
    value={formik.values.style}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    className="peer block py-2.5 px-0 w-full text-xl text-white bg-transparent border-0 border-b-[1px] border-[#1E1E1E]  appearance-none dark:text-white dark:border-gray-600 focus:outline-none "
  />
  <label
    htmlFor="style"
    className="absolute text-lg text-white dark:text-gray-400 duration-300 transform top-2 left-0 origin-[0] scale-100 translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-valid:scale-75 peer-valid:-translate-y-4"
  >
    Style
  </label>
 {formik.errors.style && formik.touched.style?        <div className="  text-xl text-red-800 " role="alert">
  <span className="font-medium">{formik.errors.style}</span> 
</div>:null}
</div>

{/* state  */}
<div className="relative z-0 w-full mb-5 group">
  <input
    type="text"
    name="state"
    id="state"
    required
    placeholder=" "
    value={formik.values.state}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    className="peer block py-2.5 px-0 w-full text-xl text-white bg-transparent border-0 border-b-[1px] border-[#1E1E1E]  appearance-none dark:text-white dark:border-gray-600 focus:outline-none "
  />
  <label
    htmlFor="state"
    className="absolute text-lg text-white dark:text-gray-400 duration-300 transform top-2 left-0 origin-[0] scale-100 translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-valid:scale-75 peer-valid:-translate-y-4"
  >
    State
  </label>
  {formik.errors.state  && formik.touched.state?        <div className="  text-xl text-red-800 " role="alert">
  <span className="font-medium ">{formik.errors.state}</span> 
</div>:null}
  
</div>

 {/* button submit */}
     <button
      onClick={handleClick}
      className="text-white bg-[#826300] hover:bg-[#eec233] focus:ring-4 focus:outline-none  font-bold  rounded-lg text-xl w-auto mx-4 px-5 py-2 text-center"
      disabled={loading}
    >
       {loading ? (
        <div className="flex justify-center items-center">
        <svg
          className="animate-spin h-5 w-5 mr-2 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
loading      </div>
      ) : (
"Submit"      )}
    </button>
     

    {/* button Reset */}
     <button
  onClick={handleReset}
  className="mt-4 text-2xl text-white hover:text-[#826300] transition"
  title="Try Again"
>
  <i className="fas fa-rotate-right"></i>
</button>
     
</form>

  </div>
  </div>
  

{/* Result Box */}
{showResult && (
  <div className="absolute top-96 left-1/2 transform -translate-x-1/2 z-50 bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-xl">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-2xl font-bold text-gray-800">Predicted Result</h3>
      <button onClick={() => setShowResult(false)} className="text-red-600 text-2xl font-bold hover:text-red-800">
        &times;
      </button>
    </div>

    {ApiError ? (
      <p className="text-red-600 text-lg font-semibold">
        {"You wrote something wrong... Try to fix it: " + ApiError.split(" ").slice(-1).join(" ")}
      </p>
    ) : (
      <>
        <p className="text-xl text-green-700 font-bold">The predicted price: {price} $</p>
      
      
        {productUrls && (
  <div className="mt-4">
    <button
      onClick={() => setShowLinks(!showLinks)}
      className="text-blue-600 font-semibold underline hover:text-blue-800 transition"
    >
      {showLinks ? "Hide" : "You might also like these products"}
    </button>

    {showLinks && (
      <div className="mt-4 flex flex-col gap-4">
        {productUrls.official_store
 && (
          <div>
            <a
              href={productUrls.official_store
              }
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-emerald-700 text-white rounded-lg font-semibold hover:bg-emerald-800 inline-block"
            >
              official_store

            </a>
            <p className="text-sm mt-1 break-words text-gray-600">{productUrls.lowest_price_link}</p>
          </div>
        )}
        {productUrls.amazon && (
          <div>
            <a
              href={productUrls.amazon}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 inline-block"
            >
               Amazon
            </a>
          </div>
        )}
        {productUrls.lowest_price_link
 && (
          <div>
            <a
              href={productUrls.lowest_price_link
                }
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 inline-block"
            >
               
lowest price

            </a>
          </div>
        )}
        {productUrls.shein && (
          <div>
            <a
              href={productUrls.shein}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 inline-block"
            >
               Shein
            </a>
          </div>
        )}
        {productUrls.ebay && (
          <div>
            <a
              href={productUrls.ebay}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-950 inline-block"
            >
               eBay
            </a>
          </div>
        )}
      </div>
    )}
  </div>
)}

      </>
    )}
  </div>
)}

    </div>

    </>
  )
}

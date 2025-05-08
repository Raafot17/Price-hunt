import React, { useContext, useState } from 'react'
import style from "./Register.module.css"
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import logg from '/src/assets/login.png'

export default function Register() {
  let {UserLogin ,setUserLogin} =useContext(UserContext)

const navigate =useNavigate();
const [ApiError, setApiError] = useState("");
const [loading, setloading] = useState(false);

  async function handleRegister(values){
    setloading(true)
    axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)
    
  .then((res)=>{
    
    setloading(false);
    if(res.data.message == "success"){
      localStorage.setItem("user token",res.data.token)
      setUserLogin(res.data.token)
      
      navigate("/")
  }
})

  .catch((res)=>{
    setloading(false)

 setApiError(res.response.data.message);

    });
}
 //بقول ل ياب اعملي اوبجيكت ونقارنه ب اوبجيكت فورميك
 //اقوله حط ف الاوبجيكت شكله
let validationSchema = yup.object().shape({
  name: yup.string().min(3,"min length is 3")
  .max(10,"max length is 10").required("name is raguired") ,
    // قولتله لازم يبقي استرينج وعدد الحروف من تلاتة الي عشرة  ولازم يبقي ريكويرد
   
 email :yup.string().email("not valid email").required("email is required"),

password:yup.string().matches(/^[A-Za-z0-9]{6,10}$/,"password should be 6 and 10 chae").required("password is Required"),


rePassword:yup.string().oneOf([yup.ref("password")],"not matches with password")
.required("rePassword is required"),
phone: yup.string().matches(/^01[1250][0-9]{8}$/,"phone not valid").required("phone is required"),
});

let formik = useFormik({
  initialValues :{
    name: "",
    email:"",
    password:"",
    rePassword: "",
    phone :"",
  },
  validationSchema ,
 // validate:validationSchemaation ,
 validateOnChange: false, // ✅ ما يتحققش أثناء الكتابة
 validateOnBlur: false, 
  onSubmit  :  handleRegister, 
})
  return <>

   <div  style={{
      backgroundImage: `url(${logg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }} 
    className="w-full h-screen flex justify-end items-center   end-9 ">
  
  <div className="bg-[#FFFFFFBF] rounded-3xl shadow-xl  p-8 max-w-md w-full mr-20">
   
  <div className="flex justify-between ">
  
      <h2 className="  text-lg font-bold ">Welcome to   <span className="text-[#E98E42]">price hunter</span> </h2>
     <div>
     <h2 className=" text-gray-600 ">you have acount? </h2>
     <Link to={"/login"}> <span className="text-[#E98E42]"> sign in</span> </Link> 
      </div>
  </div>
      <h2 className="text-5xl font-semibold text-left text-[#000000] ">Register </h2>
{ApiError ?   <div className='bg-red-600 w-1/2 mx-auto text-white  font-bold rounded-lg p-3'>
  {ApiError}
  </div> :null}

<form onSubmit={formik.handleSubmit} className="max-w-md p-4 mx-auto">
 
  <div className="relative z-0 w-full  group">

    <label htmlFor="name"   className="block text-lg text-left font-medium mb-2">Enter Your Name</label>
      <input type="text"
      value={formik.values.name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
       name="name"
        id="name"className="w-full px-4 py-2 border text-white bg-transparent rounded-md border-gray-400 focus:outline-none focus:ring-2 " placeholder=" " required />
 
 {formik.errors.name && formik.touched.name? <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
  <span className="font-medium">{formik.errors.name}</span> 
</div>:null}
 
  </div>

  <div className="relative z-0 w-full  group">

    <label htmlFor="email"   className="block text-lg text-left font-medium mb-2">Enter your Email</label>
      <input type="email"
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
       name="email"
        id="email"className="w-full px-4 py-2 border text-white bg-transparent rounded-md border-gray-400 focus:outline-none focus:ring-2 " placeholder=" " required />
    
    
  {formik.errors.email && formik.touched.email? <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
  <span className="font-medium">{formik.errors.email}</span> 
</div>:null}
 
  </div>

  <div className="relative z-0 w-full  group">
    <label htmlFor="password"   className="block text-lg text-left font-medium mb-2">Enter password</label>
      <input type="password"
      value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
       name="password"
        id="password"className="w-full px-4 py-2 border text-white bg-transparent rounded-md border-gray-400 focus:outline-none focus:ring-2 " placeholder=" " required />
 
 {formik.errors.password && formik.touched.password? <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
  <span className="font-medium">{formik.errors.password}</span> 
</div>:null}
  </div>
  <div className="relative z-0 w-full  group">
    <label htmlFor="rePassword"   className="block text-lg text-left font-medium mb-2">Enter rePassword</label>
      <input type="password"
      value={formik.values.rePassword}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
       name="rePassword"
        id="rePassword"className="w-full px-4 py-2 border text-white bg-transparent rounded-md border-gray-400 focus:outline-none focus:ring-2 " placeholder=" " required />
 
 {formik.errors.rePassword && formik.touched.rePassword? <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
  <span className="font-medium">{formik.errors.rePassword}</span> 
</div>:null}
 
  </div>
  
  <div className="relative z-0 w-full  group">
    <label htmlFor="phone"   className="block text-lg text-left font-medium mb-2">Enter your Phone</label>
      <input type="tel"
      value={formik.values.phone}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
       name="phone"
        id="phone"className="w-full px-4 py-2 border text-white bg-transparent rounded-md border-gray-400 focus:outline-none focus:ring-2 " placeholder=" " required />
  
  {formik.errors.phone && formik.touched.phone? <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
  <span className="font-medium">{formik.errors.phone}</span> 
</div>:null}
  
  </div>

<div className='flex justify-center items-center'>
<button type="submit" className="text-white mt-2 bg-[#E98E42] hover:bg-[#f3aa6e] focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-16 py-2.5 text-center">
    {loading? <i className='fas fa-spinner fa-spin '></i> : "Register"}
  </button>

{/* <Link to={"/login"}> <span className='text-green-900'>do you have an account ? Login Now</span>
</Link> */}
</div>


</form>
</div>
</div>
  </>
    
  
}

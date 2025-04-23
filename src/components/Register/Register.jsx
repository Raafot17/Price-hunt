import React, { useContext, useState } from 'react'
import style from "./Register.module.css"
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'


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
  onSubmit  :  handleRegister, 
})
  return <>
{ApiError ?   <div className='bg-red-600 w-1/2 mx-auto text-white  font-bold rounded-lg p-3'>
  {ApiError}
  </div> :null}
<h2 className='text-emerald-700 text-center font-bold text-2xl'>Register Now</h2>
<form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
  <div className="relative z-0 w-full mb-5 group">

      <input type="text"
      value={formik.values.name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
       name="name"
        id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
      <label htmlFor="name" className=" left-0  peer-focus:font-medium absolute text-sm
       text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
        rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600
         peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Name</label>
 
 {formik.errors.name && formik.touched.name? <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
  <span className="font-medium">{formik.errors.name}</span> 
</div>:null}
 
  </div>

  <div className="relative z-0 w-full mb-5 group">

      <input type="email"
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
       name="email"
        id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
    
    
      <label htmlFor="email" className=" left-0  peer-focus:font-medium absolute text-sm
       text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
        rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600
         peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Email</label>
  {formik.errors.email && formik.touched.email? <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
  <span className="font-medium">{formik.errors.email}</span> 
</div>:null}
 
  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input type="password"
      value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
       name="password"
        id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
      <label htmlFor="password" className=" left-0  peer-focus:font-medium absolute text-sm
       text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
        rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600
         peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter password</label>
 
 {formik.errors.password && formik.touched.password? <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
  <span className="font-medium">{formik.errors.password}</span> 
</div>:null}
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="password"
      value={formik.values.rePassword}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
       name="rePassword"
        id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
      <label htmlFor="rePassword" className=" left-0  peer-focus:font-medium absolute text-sm
       text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
        rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600
         peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter rePassword</label>
 
 {formik.errors.rePassword && formik.touched.rePassword? <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
  <span className="font-medium">{formik.errors.rePassword}</span> 
</div>:null}
 
  </div>
  
  <div className="relative z-0 w-full mb-5 group">
      <input type="tel"
      value={formik.values.phone}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
       name="phone"
        id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " required />
      <label htmlFor="phone" className=" left-0  peer-focus:font-medium absolute text-sm
       text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
        rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600
         peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Phone</label>
  
  {formik.errors.phone && formik.touched.phone? <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
  <span className="font-medium">{formik.errors.phone}</span> 
</div>:null}
  
  </div>

<div className='flex gap-3 items-center'>
<button type="submit" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
    {loading? <i className='fas fa-spinner fa-spin '></i> : "Register"}
  </button>

<Link to={"/login"}> <span className='text-green-900'>do you have an account ? Login Now</span>
</Link>
</div>


</form>
  </>
    
  
}

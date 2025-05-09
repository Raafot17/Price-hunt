import React, { useContext, useState } from "react";
import style from "./Login.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import logg from '/src/assets/login.png'
export default function Login() {
  let { UserLogin, setUserLogin } = useContext(UserContext);

  const navigate = useNavigate();
  const [ApiError, setApiError] = useState("");
  const [loading, setloading] = useState(false);

  async function handleLogin(values) {
    setloading(true);
    axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      .then((res) => {
        setloading(false);
        if (res.data.message == "success") {
          localStorage.setItem("user token", res.data.token);
          setUserLogin(res.data.token);
          navigate("/");
        }
      })

      .catch((res) => {
        setloading(false);

        setApiError(res.response.data.message);
      });
  }
  //بقول ل ياب اعملي اوبجيكت ونقارنه ب اوبجيكت فورميك
  //اقوله حط ف الاوبجيكت شكله
  let validationSchema = yup.object().shape({
    // قولتله لازم يبقي استرينج وعدد الحروف من تلاتة الي عشرة  ولازم يبقي ريكويرد

    email: yup.string().email("not valid email"),

    password: yup
      .string()
      .matches(/^[A-Za-z0-9]{6,10}$/, "password should be 6 and 10 chae")
    
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    // validate:validationSchemaation ,
    validateOnChange: false, // ✅ ما يتحققش أثناء الكتابة
    validateOnBlur: false, 
    onSubmit: handleLogin,
  });
  return (
    <>
    <div  style={{
    backgroundImage: `url(${logg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }} 
  className="w-full h-screen flex justify-center items-center sm:justify-end sm:items-center"
>
<div className="bg-[#FFFFFFBF] rounded-3xl shadow-xl p-8 w-full max-w-md mx-auto sm:mr-20">
 
<div className="flex justify-between ">

    <h2 className="  text-lg font-bold ">Welcome to   <span className="text-[#E98E42]">price hunter</span> </h2>
   <div>
   <h2 className=" text-gray-600 ">No acount? </h2>
   <Link to={"/register"}> <span className="text-[#E98E42]"> sign up</span> </Link> 
    </div>
</div>
    <h2 className="text-5xl font-semibold text-left text-[#000000] mb-16">Login</h2>

    {ApiError && (
      <div className="bg-red-600 text-white font-bold rounded-lg p-3 mb-4">
        {ApiError}
      </div>
    )}

    <form onSubmit={formik.handleSubmit} className="my-6 space-y-5">
        <div className="relative z-0 w-full my-6 mb-6 group">
          <label
            htmlFor="email"
     className="block text-left text-lg font-medium  mb-2"
          >
            Enter your username or email address
          </label>
          <input
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
            id="email"
            className="w-full px-4 py-2 border text-white bg-transparent rounded-md border-gray-400 focus:outline-none focus:ring-2 "
            placeholder="Username or email address"
            required
          />
          {formik.errors.email && formik.touched.email ? (
            <div
              className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
              role="alert"
            >
              <span className="font-medium">{formik.errors.email}</span>
            </div>
          ) : null}
        </div>

        <div className="relative z-0 w-full mb-5 my- group">
          <label
            htmlFor="password"
            className="block text-lg text-left font-medium mb-2"
          >
Enter your Password          </label>
          <input
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="password"
            id="password"
            className="w-full px-4 py-2 border text-white bg-transparent rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="password"
            required
          />

          {formik.errors.password && formik.touched.password ? (
            <div
              className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
              role="alert"
            >
              <span className="font-medium">{formik.errors.password}</span>
            </div>
          ) : null}
        </div>

        <div className="flex  pb-16 justify-center items-center">
          <button
            type="submit"
            className="text-white  bg-[#E98E42] hover:bg-[#f3aa6e] focus:ring-4 focus:outline-none  font-semibold rounded-lg text-lg w-full sm:w-auto px-16 py-2.5 text-center"
          >
            {loading ? <i className="fas fa-spinner fa-spin "></i> : "Login"}
          </button>

          {/* <Link to={"/ForgetPass"} className="text-gray-700">
            Forgot Password?
          </Link> */}

          {/* <Link to={"/register"}>
            {" "}
            <span className="text-green-900">
              do you have an account ? Register Now
            </span>
          </Link> */}
        </div>
      </form>
    </div>
    </div>
    </>
  );
}

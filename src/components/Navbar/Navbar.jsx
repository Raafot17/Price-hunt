import React, { useContext, useState } from 'react'
import style from "./Navbar.module.css"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'

export default function Navbar() {
  let {UserLogin ,setUserLogin} =useContext(UserContext);
let navigate =useNavigate()


function logout (){
localStorage.removeItem("user token");
 setUserLogin(null)
 navigate("/login")


}

 const [isMenuOpen, setIsMenuOpen] = useState(false); // state to toggle menu


return (
  <>
    <nav className="w-full bg-transparent backdrop-blur-sm px-6 py-2  ">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 py-3 mx-auto">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
      {/* <img src="/src/assets/logo.png" alt="logo" /> */}
        </Link>
        
        {/* Button for Mobile */}
        <button
          className="text-gray-700 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`} />
        </button>

        {/* Links Section */}
      {
        UserLogin? <div className={`lg:flex lg:gap-6 items-center ${isMenuOpen ? 'block' : 'hidden'} lg:block w-full lg:w-auto`}>
        <ul className="flex flex-col items-center w-full gap-6 lg:flex-row lg:w-auto">
          <li><NavLink to="/" className="px-4 py-2 text-lg text-white hover:text-yellow-300">Home</NavLink></li>
        </ul>
      </div> :null
      }  
        
        {/* Icons and Buttons Section */}
        <div className="flex items-center gap-4">
          
          {/* Social Media Icons */}
          {/* {UserLogin? <div className="hidden gap-3 text-green-600 md:flex">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-tiktok"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-youtube"></i>
          </div> :null}
           */}
          {/* Action Buttons */}
          
          <div className="flex gap-4">
           {UserLogin? 
           <>
          
           </> :null}
           
            {UserLogin?  <button onClick={logout} className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium  rounded-lg text-lg w-full sm:w-auto px-3 py-2 text-center">
              Sign Out
            </button> :<>
            <NavLink to="/Login" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium  rounded-lg text-lg w-full sm:w-auto px-3 py-2 text-center">
              Login
            </NavLink>
            
            <NavLink to="/Register" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium  rounded-lg text-lg w-full sm:w-auto px-3 py-2 text-center">
              Register
            </NavLink>
            </> }
          
          </div>
        </div>
      </div>
    </nav>
  </>
);
  
}

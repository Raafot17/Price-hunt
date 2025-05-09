import React, { useContext, useState } from 'react'
import style from "./Navbar.module.css"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import image from "/src/assets/ll.png"
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
    <nav className="w-full bg-transparent backdrop-blur-[2.5px] px-6   ">
      <div className="flex flex-wrap items-center  justify-between max-w-screen-xl px-4  mx-auto">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
  <img src={image} alt="Logo" className=" w-auto " />
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
          <li><NavLink to="/Search" className="px-4 py-2 text-lg text-white hover:text-yellow-300">search</NavLink></li>
        </ul>
      </div> :null
      }  
        
        {/* Icons and Buttons Section */}
        <div className="flex items-center gap-4">
          
          {/* Action Buttons */}
          
          <div className="flex gap-4">
           {UserLogin? 
           <>
          
           </> :null}
           
           {UserLogin ? (
  <i
    onClick={logout}
    className="fa-solid fa-arrow-right-from-bracket text-white text-2xl cursor-pointer  transition"
    title="Sign Out"
  ></i>
) : (
  <>
    <NavLink to="/Login" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-lg w-full sm:w-auto px-3 py-2 text-center">
      Login
    </NavLink>
    <NavLink to="/Register" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-lg w-full sm:w-auto px-3 py-2 text-center">
      Register
    </NavLink>
  </>
)}
          
          </div>
        </div>
      </div>
    </nav>
  </>
);
  
}

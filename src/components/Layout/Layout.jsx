import React from 'react'
import style from "./Layout.module.css"
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return <>
 

  <div className="text-center">
    <Outlet/>
  </div>



  
    
    </>
  
}

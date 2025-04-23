

import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

export default function Footer() {
  let {UserLogin ,setUserLogin} =useContext(UserContext);

  return (
    <>
       {UserLogin  !=null ?
 <footer class="text-white bg-emerald-700 text-center py-5">
 
   © 2025 Hunter Price. 


</footer>

    
    
  
  
       :null}
   
      

 
    
    </>
    
  
  );
    
}

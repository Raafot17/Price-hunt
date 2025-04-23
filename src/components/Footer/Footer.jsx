

import React, { useContext } from "react";
import img1 from "../../assets/amazon_pay.png";
import img2 from "../../assets/amircan_express.png";
import img3 from "../../assets/master_card.png";
import img4 from "../../assets/pay_pal.png";
import img5 from "../../assets/app_store.png";
import img6 from "../../assets/and.png";
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

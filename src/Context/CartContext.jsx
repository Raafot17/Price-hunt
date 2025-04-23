import axios from "axios";
import { createContext } from "react";

export let CartContext = createContext();
 
let headers ={
        token: localStorage.getItem("user token"),  
    };


export default function CartContextProvider(props){

function addToCart(productId){
   return axios.post
   (`https://ecommerce.routemisr.com/api/v1/cart`,
{
    productId:productId,
}
,
{
    headers ,
}
)
.then((res)=>res)
.catch((err)=>err);
}
 

function GetLoggedusercart (){
   return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{headers,})
   
    .then((res)=>res)

.catch((err)=>err);

}


function Updatecartproductquantity(productId , newCount){
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {count : newCount }
    ,{headers,})
     .then((res)=>res)
 .catch((err)=>err);
 
 }
 

 function deleteItem (productId){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{headers,})
     .then((res)=>res)
 .catch((err)=>err);
 
 }
 
 function clearall (){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{headers,})
     .then((res)=>res)
 .catch((err)=>err);
 
 }
 

    return (
    <CartContext.Provider value={{Updatecartproductquantity, deleteItem , addToCart ,clearall , GetLoggedusercart}}>
        {props.children}
    </CartContext.Provider>
    );
}

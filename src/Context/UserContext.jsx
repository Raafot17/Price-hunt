import { createContext, useState } from "react";




export let UserContext =createContext();
export default function UserContextProvider(props){

//لو في توكين رجعلي التوكين وحطها ف الاستات 
//علشان لمااعمل ريلود وانا عامل لوجين ميرجعنيش تاني
const [UserLogin, setUserLogin] = useState(
    localStorage.getItem("user token") ? localStorage.getItem("user token"):null
);


    return <UserContext.Provider value={{UserLogin,setUserLogin}}  >
{props.children}
    </UserContext.Provider>
    
}
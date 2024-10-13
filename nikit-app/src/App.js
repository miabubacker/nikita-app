
import Mainpage from "./Components/MainPage";
import "./Style/Main.scss";
import "font-awesome/css/font-awesome.min.css";
 import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
   const[count,setCount]= useState(0)
//     useEffect(()=>{
//      const ds=  setInterval(()=>{
// setCount(prev=>prev+1)
//  console.log("re-render")
//        },2000)
//         return ()=> clearInterval(ds)
//     },[count])
  return (
    <>
    {/* {count }
     <button onClick={()=>{setCount(count+1)
    setCount((count)=>count+1)
    // setCount((count)=>count+1)
     console.log(count)
    }}>add</button> */}
    {/* <div>
<div style={{position:"absolute",left:"50%",top:"20%"}}>check</div>

    </div> */}
     <BrowserRouter>
    <Routes>
        <Route path='*' element={<Mainpage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

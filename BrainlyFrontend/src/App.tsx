import { Singup } from "./Components/Pages.tsx/Singnup";



import Content from "./Components/Pages.tsx/Content";
import { Signin } from "./Components/Pages.tsx/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";



export function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<div className="text-red-600 text-3xl">page broke</div>}/>
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Singup/>} />
      <Route path="/content" element={<Content/>} />
      <Route path="*" element={<div style={{backgroundColor :"white"}}> <b>please go back to main page</b>  </div>}/>
    </Routes>
    </BrowserRouter>
   
  )
}
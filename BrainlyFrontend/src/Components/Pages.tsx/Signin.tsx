import { useRef } from "react"
import { BACKEND_URL } from "../../Configurl"
import { Button } from "../Button"

import { Input } from "../Input"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {  MindsyncAuth } from "../Icon/Mind"

export const Signin  = ()=>{

    const emailref  = useRef<HTMLInputElement>(null)
    const passwordref = useRef<HTMLInputElement>(null)
    const Navigate = useNavigate()

  async   function signin(){
        const email = emailref.current?.value
        const password  = passwordref.current?.value 
       

       const response  =    await axios({
        method : "post",
        url : BACKEND_URL + "/api/v1/signin",
        data : {
            email : email,
            password : password
        }
       })

       console.log(response.data)
       const token = response.data.token
       
       Navigate("/content")
       localStorage.setItem("token" , token)
 
    }
    
    return (
        <div className="h-screen w-screen bg-[#101618]  flex justify-evenly items-center " >
         <div className="flex items-center "> <div>{<MindsyncAuth/>} </div> <div className="text-6xl text-[#65acbe] font-kanit font-semibold"> SyncMind</div></div>
        
        <div className="w-96 h-96 bg-white items-center justify-center flex flex-col  gap-2  rounded-xl border border-blue-500" >
            <h1 className="font-Palanquin text-3xl pb-10 font-extrabold">Sign <span className=" text-[#65acbe]">In</span> </h1>
            <div className="w-full px-6"><Input placeholder="Emial id" ref={emailref}  /></div>
            <div className="w-full px-6"><Input placeholder="password"  ref={passwordref} /></div>
          
          <Button  onClick={signin} loding={false} text="Signin" variants="secondary" size="md"/>
          <h3 className="font-Palanquina cursor-pointer" onClick={()=>{Navigate("/signup")}}>Dont't Have an Account?</h3>
        </div>
        </div>
    )
}
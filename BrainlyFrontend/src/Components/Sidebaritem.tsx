import { DocumentIcon } from "./Icon/Documenticon"
import {  Xicon } from "./Icon/xicon"
import {  Youtubeicon  } from "./Icon/Youtubeicon"


type nametype = "Video" | "Twitter" | "Document" 

interface SidebarItemprops {
    name : nametype
}

export const SidebarItem = (props  : SidebarItemprops)=>{
    return (
         
        <div className="flex gap-4 cursor-pointer hover:bg-gray-200  hover:text-black hover:rounded-xl text-white  w-full pl-5 h-14 items-center   ease-in-out transition duration-75  ">
            <div className=" text-white">{(props.name === "Video" && <Youtubeicon sidebar={true}/>)}
            {(props.name === "Twitter" && <Xicon sidebar={true}/>)}
            {(props.name === "Document" && <DocumentIcon sidebar={true}/>)}</div> 
            <div className="text-[1.4rem] font-Imprima  font-semibold  ">{props.name}</div>
        </div>
    )
}
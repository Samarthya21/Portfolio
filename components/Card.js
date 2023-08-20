'use client';
import React ,{useState} from "react"

export default function Card(props){
    const [isImageVisible,setImageVisible]=useState(false);
    function handleMouseOver(event){
        setImageVisible(true);
    }
    function handleMouseOut(event){
        setImageVisible(false);
    }
    return(
        <div className="h-48 w-48  m-4 border border-blue-500 border-opacity-100 border-4 rounded flex flex-col items-center relative card-container" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <h1 className="p-2 font font-bold text-xl">{props.title}</h1>
        <h1 className="px-4 py-8 text-center" >{props.name}</h1>
        {isImageVisible && (
        <img
          src={props.i}
          alt="Hovered Image"
          className="absolute inset-0 w-full h-full"
        />
      )}
        </div>
    )
}
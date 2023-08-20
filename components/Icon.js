import React from "react"
export default function Icon(props){
    return(
        <div className="h-48 w-48 p-10 relative card-container flex flex-col items-center">
        <div>
        <img src={props.im}></img>
        </div>
        <div>
        <h1 className="text-center">{props.title}</h1>
        <h1 className="text-center">{props.exp}</h1>
        <h1 classname="text-center">Projects: {props.projects}</h1>
        </div>
        
        </div>
        
    )
}
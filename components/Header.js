import React from "react"
import { dancingScript ,oswald, inter} from "./fonts.js"
export default function Header(){
    const backgroundImageUrl = "https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1778&q=80"; 

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
    return(
        
        <div className="pl-36 h-screen w-full flex flex-col  justify-center" style={backgroundStyle}>
         
         <h1 className={`p-10 text-8xl text-bold ${inter.className} text-white`}>CREATIVE</h1>
         <h1 className={`p-10 text-8xl text-bold ${inter.className} text-white`}>FRONT-END DEVELOPER</h1>
            
        </div>
    )
}
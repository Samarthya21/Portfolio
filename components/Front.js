import React from "react"
import Card from "./Card.js"
import Icon from "./Icon.js"
import { dancingScript ,oswald, inter} from "./fonts.js"
export default function Front(){
    return(
    <div className=" w-full h-screen flex flex-col items-center justify-top">
    <h1 className={`p-10 text-4xl ${dancingScript.className}`}>Hello</h1>
    <h1 className={`p-10 text-4xl ${dancingScript.className}`}>Myself Samarthya Alok</h1>
    
    <div className="">
        <div className={`p-4 flex flex-col items-center`}>
        <h1 className={`p-10 text-4xl ${inter.className}`}>Educational Qualifications</h1>
        </div>
        <div className="p-4 flex flex-row items-center gap-x-32">
        <Card title="Metric" name="CityMontessori School, Lucknow" i="https://cmseducation.org/campuses/kanpurrd/images/slider/1.jpg"></Card>
        <Card title="Inter" name="CityMontessori School, Lucknow ." i="https://cmseducation.org/campuses/kanpurrd/images/slider/1.jpg"></Card>
        <Card title="College" name="Vellore Institute of Technology" i="https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/1200px-Vellore_Institute_of_Technology_seal_2017.svg.png"></Card>
        </div>
        

    </div>
    <div className="flex flex-col items-center">
        <div><h1 className="text-4xl text-bold p-10 ">Progamming languages</h1></div>
        <div className="flex flex-row">
            <Icon title="Python" im="https://img.icons8.com/?size=512&id=13441&format=png" projects="5" exp="8 months"></Icon>
            <Icon title="C++" im="https://img.icons8.com/?size=512&id=40670&format=png" projects="Data Structurres" exp="1.5 years"></Icon>
            <Icon title="HTML" im="https://img.icons8.com/?size=512&id=20909&format=png" projects="3" exp="1 year"></Icon>
            <Icon title="CSS" im="https://img.icons8.com/?size=512&id=21278&format=png" projects="3" exp="1 year"></Icon>
            <Icon title="JavaScript" im="https://img.icons8.com/?size=512&id=108784&format=png" projects="10" exp="6 months"></Icon>
            <Icon title="React" im="https://img.icons8.com/?size=512&id=NfbyHexzVEDk&format=png" projects="4" exp="3 months"></Icon>
        </div>
        
    </div>
    </div>
    

    )
    
}
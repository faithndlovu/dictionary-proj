import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(){
let [keyword, setkeyword]=useState ("");
    
function handleResponse(response){
    console.log(response.data[0]);
}

function search(event) {
    event.preventDefault();

 
let apiUrl= "https://api.shecodes.io/dictionary/v1/define?word=love&key=dof43157bf3aftdf9163bbd7407de4ba";
axios.get(apiUrl).then(handleResponse);
}

 
 
 function handlekeywordChange(event){
    setkeyword(event.target.value);
 }
    return(
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handlekeywordChange}/>
            </form>
        </div>
    );
    
}
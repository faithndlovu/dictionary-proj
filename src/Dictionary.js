import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(){
const [keyword, setkeyword]= useState ("");


function handleResponse(response){
    console.log(response.data[0]);
}

function search(event) {
    event.preventDefault();

 if (keyword){
let apiUrl= "https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=dof43157bf3aftdf9163bbd7407de4ba";
axios.get(apiUrl).then(handleResponse);
}

}
 
 function handlekeywordChange(event){
    setkeyword(event.target.value);
 }
    return(
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" 
                onChange={handlekeywordChange}
                placeholder="search a word"/>
            </form>
        </div>
    );
    
}
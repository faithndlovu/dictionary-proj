import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";


export default function Meaning(props){
return (
    <div className="Meaning">
    <h3>{props.meaning.partofspeech}</h3>
         {props.meaning.definitions.map(function (definition, index){
            return (
                <div key={index}>
                    
                      <div className="definition"> <strong>Definition:</strong>
                        {definition.definition}
                        </div>
                        
                        <div className="example"><strong>Example:</strong>
                        {definition.example}
                    </div>
                    <Synonyms synonyms={definition.synonyms} />
                   
                    

                  </div>
            );
         })}
         </div>
);              
}
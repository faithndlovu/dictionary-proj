import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";


export default function Meaning(props){
return (
    <div className="Meaning">
    <h3 className="PartOfSpeech">This is a {props.meaning.partofspeech}</h3>
         {props.meaning.definitions.map(function (definition, index){
            return (
                <div key={index}>
                    
                      <div className="definition">
                        {definition.definition}
                        </div>
                        
                        <div className="example">
                        {definition.example}
                    </div>
                    <Synonyms synonyms={definition.synonyms} />
                   
                    

                  </div>
            );
         })}
         </div>
);              
}
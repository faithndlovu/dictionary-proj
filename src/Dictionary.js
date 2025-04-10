import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultkeyword);
   let [results, setResults]=useState(null);
     let [loaded, setLoaded]= useState(false);

  function handleResponse(response) {
     setResults(response.data[0]);
}

function search(keyword){
 // documentation: https://dictionaryapi.dev/e
 let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
 axios.get(apiUrl).then(handleResponse);
}


  function handleSubmit(event) {
    event.preventDefault();
    search(keyword);
  }
   

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load(){
    setLoaded(true);
    search(keyword);
  }

if (loaded){

  return (
    <div className="Dictionary">
      <h1>What's the word you're curious about?</h1>
      <section>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultkeyword}/>
      </form>
      <div className="Hint">
        Suggested words: sunrise, love, people, wine...
      </div>
      </section>
      <Results results={results} />
    </div>
  );
} else{
  load();
  return "Loading..."
}
}
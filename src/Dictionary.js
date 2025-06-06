import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultkeyword);
   let [results, setResults]=useState(null);
     let [loaded, setLoaded]= useState(false);
     let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
     setResults(response.data[0]);
}

function handlePexelsResponse(response) {
  setPhotos(response.data.photos);
}

function search(){
 // documentation: https://dictionaryapi.dev/e
 let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
 axios.get(apiUrl).then(handleResponse);


 let pexelsApiKey =
      "563492ad6f91700001000001fdd29f0808df42bd90c33f42e128fa89";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }




  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
   

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load(){
    setLoaded(true);
    search();
  }

if (loaded){
  return (
    <div className="Dictionary">
      <section>
      <h1>What's the word you're curious about?</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" 
        onChange={handleKeywordChange} 
        defaultValue={props.defaultkeyword}/>
      </form>
      <div className="Hint">
        Suggested words: sunrise, love, people, wine...
      </div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
} else{
  load();
  return "Loading...";
}
}
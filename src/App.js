import logo from './logo.svg';
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
       
      </header>
      <main>
        <Dictionary defaultkeyword="sunshine"/>
      </main>
      <footer className='App-footer'>
        <small>this project was coded by Faith L Ndlovu and is <a href='https://github.com/faithndlovu/dictionary-proj'>open sourced on Github</a> and <a href='https://dictionaryf.netlify.app/'>hosted on Netlify</a></small>
      </footer>
    </div>
</div>    
  );
}

export default App;

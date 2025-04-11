import logo from './mylogo.png.png';
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
        <small>Coded by Faith L Ndlovu</small>
      </footer>
    </div>
</div>    
  );
}

export default App;

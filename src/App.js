import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Message from './Message';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey You! Yes, You. Come closer.
        </p>
        <p>-Kevs</p>
        <Greet name = "Lapu-Lapu" heroName = "Chief"/>
        <Message/>
        <Greet/>
        <Button/>
        <Greet name ="Steve Rogers" heroName ="Capt. America"/>
        <Greet name ="Pantheon" heroName ="The Unbrekable Spear"/>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

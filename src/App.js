import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent';
import Ccomponents from './Ccomponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fcomponent name="Pavel"/>
        <img src={logo} className="App-logo" alt="logo" />
        <Ccomponents numbers={[1,2,3,4]}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

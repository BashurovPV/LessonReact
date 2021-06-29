import logo from './logo.svg';
import './App.css';
import Ccomponents from './Ccomponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Ccomponents numbers={[1, 2, 3, 4]} />
      </header>
    </div>
  );
}

export default App;

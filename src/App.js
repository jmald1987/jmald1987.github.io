import logo from './how-css-works.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Johnny Maldonado and I am going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/jmald1987"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow on git
        </a>
      </header>
    </div>
  );
}

export default App;

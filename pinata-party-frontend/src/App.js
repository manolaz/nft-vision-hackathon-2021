import logo from "./logo.svg";
import "./App.css";
import AuthCluster from "./AuthCluster";
// import TokenData from "./TokenData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          av Edit <code>src/App.js</code> and save to reload.
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
      <div className="Auth">
        <AuthCluster />
        {/* <TokenData /> */}
      </div>
    </div>
  );
}

export default App;

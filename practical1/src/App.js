import logo from './logo.svg';
import './App.css';

function App() {
  const textStyle = {
    color: "rgb(97, 218, 251)",
    textShadow :" 1px 2px white",
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 style={textStyle}> Hello World </h2>
      </header>
    </div>
  );
}

export default App;

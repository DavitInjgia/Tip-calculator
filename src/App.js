import "./App.css";
import logo from "./assets/SPLITTER.svg";
import Container from "./container/Container";
function App() {
  return (
    <div className="body">
      <div className="full">
        <img src={logo} alt="splitter" />
        <Container/>
      </div>
    </div>
  );
}

export default App;

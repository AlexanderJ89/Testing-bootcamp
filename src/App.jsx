import "./App.css";
import HelloWorld from "./components/HelloWorld";
import ButtonOnOff from "./components/ButtonOnOff";
import Counter from "./components/Counter";
import CapitalizedInput from "./components/CapitalizedInput";
import ShakespeareInsult from "./components/ShakespeareInsult";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <ButtonOnOff />
      <Counter />
      <CapitalizedInput />
      <ShakespeareInsult />
    </div>
  );
}

export default App;

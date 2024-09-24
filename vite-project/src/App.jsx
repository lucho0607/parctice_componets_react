import { useState } from "react";
import "./App.css";
import { Child } from "./components/child";
import MyFourthComponent from "./MyFourthComponent";

function App() {
  const [name, setName] = useState("Luis Fernando Cubillos");
  return (
    <div className="App">
      <header className="App-header">
        <hr className="white-hr" />
        <MyFourthComponent />
        <hr className=" white-hr " />
        <Child name={name} setName={setName} />
      </header>
    </div>
  );
}

export default App;

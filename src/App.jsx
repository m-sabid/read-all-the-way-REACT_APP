import { useState } from "react";
import "./App.css"
import MainMenu from "./components/MainMenu/MainMenu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MainMenu />
    </div>
  );
}

export default App;

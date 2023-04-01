import { useState } from "react";
import "./App.css"
import MainContent from "./components/MainContent/MainContent";
import MainMenu from "./components/MainMenu/MainMenu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MainMenu />
      <MainContent />
    </div>
  );
}

export default App;

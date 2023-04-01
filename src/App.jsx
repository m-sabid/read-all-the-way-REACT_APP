import { useState } from "react";
import "./App.css"
import Blog from "./components/Blog/Blog";
import MainContent from "./components/MainContent/MainContent";
import MainMenu from "./components/MainMenu/MainMenu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <MainMenu />
      <MainContent />
      <Blog />
    </div>
  );
}

export default App;

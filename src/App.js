import logo from "./logo.svg";
import "./App.css";
import ProductPage from "./Page/ProductPage";
import { Routing } from "./Routing/Routing";
import { useState } from "react";

function App() {
  const [count,setCount] = useState(0)
  
  return (
    <div className="App">
      <div>store {count}</div>
      <Routing/>
    </div>
  );
}

export default App;

import "./App.css";
import Slider2 from "./components/Slider2";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Join from "./components/Join";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Slider2 />
    <Join/>
    
    </BrowserRouter>
  );
}

export default App;

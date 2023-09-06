import "./App.css";
import Slider2 from "./components/Slider2";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Parentsays from "./components/homestyle1/Parentsays";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Slider2 />
      <Parentsays/>
    
    </BrowserRouter>
  );
}

export default App;

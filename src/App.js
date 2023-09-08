import "./App.css";

import "swiper/css";
import Slider2 from "./components/Slider2";

import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import SwiperOur from "./components/SwiperOur";

import Settling from "./components/Settling";


import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";

import Table from "./components/table/Table";
import WayToLearn from "./components/WayToLearn";
import BestFor from "./components/BestFor";
import ProgramDetails from "./components/ProgramDetails";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Slider2 />
      <ContactForm/>

       <Faq/>
      <SwiperOur />
      <Settling />
      <ProgramDetails/>
      <BestFor/>

      <WayToLearn/>
      <Table/>

    </BrowserRouter>
  );
}

export default App;

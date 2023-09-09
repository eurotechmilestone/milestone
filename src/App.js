import "./App.css";

import "swiper/css";
import Slider2 from "./components/Slider2";

import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import Join from "./components/Join";
=======
import SwiperOur from "./components/SwiperOur";

import Settling from "./components/Settling";
import WayToLearn from "./components/WayToLearn";


import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";

import Table from "./components/table/Table";

import WayToLearn from "./components/WayToLearn";
import BestFor from "./components/BestFor";
import ProgramDetails from "./components/ProgramDetails";

import Programs from "./components/programs/Programs";


>>>>>>> f8834ac162d8fa0c777a881c82ceee1ac7780cab

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Slider2 />
<<<<<<< HEAD
    <Join/>
    
=======
      <ContactForm/>

       <Faq/>
      <SwiperOur />
      <Settling />
      <ProgramDetails/>
      <BestFor/>

      <WayToLearn/>
      <Table/>
      <Programs/>

>>>>>>> f8834ac162d8fa0c777a881c82ceee1ac7780cab
    </BrowserRouter>
  );
}

export default App;

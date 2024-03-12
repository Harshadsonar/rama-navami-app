import "./App.css";
import React from "react";
import Prizes from "./components/prizes/Prizes.jsx";
import Dates from "./components/dates/Dates.jsx";
import Registration from "./components/registration/Registration.jsx";
import Topics from "./components/topics/Topics.jsx";
import Footer from "./components/footer/Footer.jsx";
import NavBar from "./components/navBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/topics" element={<Topics />} />
        <Route path="/dates" element={<Dates />} />  
        <Route path="/prizes" element={<Prizes />} />
        <Route path="/contact" element={<Footer />} /> 
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

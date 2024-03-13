import "./App.css";
import React from "react";
import Prizes from "./components/prizes/Prizes.jsx";
import Dates from "./components/dates/Dates.jsx";
import Registration from "./components/registration/Registration.jsx";
import Topics from "./components/topics/Topics.jsx";
import Footer from "./components/footer/Footer.jsx";
import NavBar from "./components/navBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Topics />
      <Dates />
      <Prizes />
      <Registration />
      <Footer />
    </>
  );
}

export default App;

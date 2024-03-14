import "./App.css";
import React from "react";
import Home from "./components/Home";
import Topics from "./components/Topics";
import Dates from "./components/Dates";
import Prizes from "./components/Prizes";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
      <Topics/>
      <Dates />
      <Prizes />
      <Registration />
      <Footer />
      </div>
  );
}

export default App;

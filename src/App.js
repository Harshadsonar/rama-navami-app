import './App.css';
import React from 'react';
import Prizes from './components/prizes/Prizes.jsx';
import Dates from './components/dates/Dates.jsx';
import Registration from './components/registration/Registration.jsx';
import Topics from './components/topics/Topics.jsx';
import Banner from './components/banner/Banner.jsx';
import NavBar from './components/navBar/NavBar.jsx';


function App() {
  
  return (
    <div className="App">
      <NavBar />
        <Banner />
        <Topics />
        <Dates />
        <Prizes />
      <Registration />
    </div>
  );
}

export default App;

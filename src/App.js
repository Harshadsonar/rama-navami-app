import './App.css';
import React, { useState } from 'react';
import Modal from './components/modal/Modal.jsx';
import Prizes from './components/prizes/Prizes.jsx';
import Dates from './components/dates/Dates.jsx';
import img1 from "./img/img1.jpg";
import img2 from "./img/person.png";
import img3 from "./img/PhBriefcaseSimpleThin.png"
import img4 from "./img/FluentPhone28Regular.png";
import img5 from "./img/GameIconsAges.png";
import img6 from "./img/MdiEmailEditOutline.png";
import img7 from "./img/email.png";
import img8 from "./img/password.png";


function App() {
  const [data, setData] = useState({
    name: '',
    profession: '',
    college: '',
    age: '',
    mobileNumber: '',
    email: ''
  });

  const {name, profession, college, age, mobileNumber, email} = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]:e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch(
        "https://v1.nocodeapi.com/harshadsonar02/google_sheets/TqlCOfuEAPvbyWTJ?tabId=Sheet1",
        {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          [name,
          profession,
          college,
          age,
          mobileNumber,
          email],
        ]),
      });
      await response.json();
      setData({...data, name:"", profession: "",college: "", age:"", mobileNumber:"", email:""});
    } catch(err){
      console.log(err);
    }
  };
  return (
    <div className="App">
      <div className="banner">
      <img src={img1} alt="RamaNavami" /><br />
      <a href="registration.html" class="register-button">Register Now</a>
      </div>
        <Modal  className="topics"/>
        <Dates  className="dates"/>
        <Prizes  className="prizes"/>
      <a href="registration.html" class="register-button-second">Register Now</a>
      
      <form onSubmit={handleSubmit}>
        <div className='name-input'>
          <img src={img2} alt="name" />
        <label htmlFor="name">Name:- </label>
        <input type="text" name='name' value={name} onChange={handleChange} placeholder="Rohit Sharma" required/>
        </div>
        
        <div className="profession-input">
          <img src={img3} alt="profession" />
        <label htmlFor="profession">Profession:- </label>
        <select name="profession" value={profession} onChange={handleChange} required> 
        <option value="">Select an option</option>
          <option value="student">Student</option>
          <option value="working">Working</option>
        </select>
        </div>

        <div className='college-input'> 
        <img src={img5} alt="college" />
        <label htmlFor="college">College/Company Details:-</label>
        <input type="text" name='college' value={college} onChange={handleChange} placeholder="SIBM, Pune" required /> 
        </div>

        <div className='age-input'>
          <img src={img4} alt="" />
        <label htmlFor="age">Age:-</label>
        <input type="number" name='age' value={age} onChange={handleChange} placeholder="21" required />
        </div>

        <div className="mobileNumber-input">
          <img src={img4} alt="mobileNumber" />
        <label htmlFor="mobileNumber" >Mobile No:-</label>
        <input type="tel"  value={mobileNumber} onChange={handleChange} name='mobileNumber' pattern="[0-9]{10}" placeholder="9999999999" required/>
        </div>

        <div className="email-input">
          <img src={img7} alt="" />
        <label htmlFor="email">Email id:-</label>
        <input type="email" value={email} onChange={handleChange} name='email' placeholder="test123@gmail.com" required />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

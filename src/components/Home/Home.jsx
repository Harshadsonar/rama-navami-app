import React from 'react'
import img1 from "../img/ram-murti-ayodhya-hd-photo3-690x1536.jpeg";
import img2 from "../img/img1.jpg";
import "./Home.css";
import 'animate.css';
import { Link } from "react-router-dom";

export default function Home() {
  
  return (
    <div>
      <div className="banner">
        <img className="banner-img2" src={img2} alt="Ram Mandir" />
        <div>
          <img className='banner-img1' src={img1} alt="Ram Murti" />
        </div>
        <div className='title-text'>
          <h1 className='animate__animated animate__bounceInDown essay-text'>
            Essay Writing Competition
          </h1>
          <h1 className='animate__animated animate__bounceInDown festival-text'>
            Rama Navami Festival
          </h1>
        </div>
      </div>
      <div className='registration-form-btn'>
      <Link to="/registration"><button className="register-button">Register Now</button></Link>
      </div>
    </div>
  )
}

import React from 'react'
import img1 from "../img/ram-murti-ayodhya-hd-photo3-690x1536.jpeg";
import "./style.css";

export default function Banner() {
  return (
    <div>
      <div className="banner">
      <img className='bannerImg' src={img1} alt="RamaNavami" /><br />
      <div className='center-left'>
        <h1>Essay Writing <br /> Competition</h1>
      </div>
      </div>
      <div>
      </div>
      <div className='registration-form-btn'>
      <p>Register Here :- <a href="registration.html" class="register-button">Register Now</a></p>
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import img1 from "../img/ram-murti-ayodhya-hd-photo3-690x1536.jpeg";
import img2 from "../img/img1.jpg";
import "./Home.css";
import 'animate.css';
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion"

export default function Home() {
  const[showImage, setShowImage] = useState(true);
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 3000);

    return () => 
      clearTimeout(timer);
    },[]);
  
  return (
    <div>
      <motion.path
      d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
      style={{ pathLength: scrollYProgress }}
    />
      <div className="banner">
      
        <img className="banner-img2" src={img2} alt="Ram Mandir" />
        <div>
          {showImage &&(
          <img className='animate__bounceInDown banner-img1' src={img1} alt="Ram Murti" />
          )}
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
      <Link to="registration"><button className="register-button">Register Now</button></Link>
      </div>
      
    </div>
  )
}

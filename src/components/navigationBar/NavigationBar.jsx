// /* eslint-disable react/jsx-no-target-blank */
// import { useState, useEffect } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import ramanavamilogo from '../img/ramanavamilogo.svg';
// import navIcon1 from '../img/nav-icon1.svg';
// import gmail from '../img/gmail.svg';
// import whatsapp from '../img/whatsapp.svg';
// import { HashLink } from 'react-router-hash-link';
// import {
//   BrowserRouter as Router
// } from "react-router-dom";
// import "./style.css";

// export const NavigationBar = () => {

//   const [activeLink, setActiveLink] = useState('home');
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     }

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, [])

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   }

//   return (
//     <Router>
//       <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
//         <Container>
//           <Navbar.Brand href="/">
//             <img src={ramanavamilogo} alt="ramanavami-logo" />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav">
//             <span className="navbar-toggler-icon"></span>
//           </Navbar.Toggle>
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
//               <Nav.Link href="#topics" className={activeLink === 'modal' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('topics')}>Topics</Nav.Link>
//               <Nav.Link href="#dates" className={activeLink === 'dates' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('dates')}>Dates</Nav.Link>
//               <Nav.Link href="#prizes" className={activeLink === 'prizes'? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('prizes')}>Prizes</Nav.Link>
//             </Nav>
//             <span className="navbar-text">
//               <div className="social-icon">
//                 <a href="https://www.linkedin.com/in/harshad-sonar/" target="_blank"><img src={navIcon1} alt="Linkedin" /></a>
//                 <a href="https://www.sonarharshad02@gmail.com/" target="_blank"><img src={gmail} alt="Gmail" /></a>
//                 <a href="https://wa.me/8237382014" target="_blank"><img src={whatsapp} alt="Whatsapp"/></a>
//               </div>
//               <HashLink to='#register'>
//                 <button className="register-btn"><span>Register Now</span></button>
//               </HashLink>
//             </span>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </Router>
//   )
// }
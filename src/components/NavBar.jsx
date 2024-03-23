import React, { useEffect, useState } from "react";
import MailOutlineIcon from "../components/assets/svg/gmail.svg";
import iskcon_logo from "../components/assets/svg/iskcon_logo.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router  } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import DrawerComp from "./DrawerComp";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust this value according to your breakpoints
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", handleResize);

    // Initial check for mobile view on component mount
    handleResize();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onUpdateActiveLink = (activeLink) => {
    setActiveLink(activeLink);
  };


  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand className="navbar-img" href="/">
          <div className="navbar-logo">
            <img src={iskcon_logo} alt="iskcon_logo" />
          </div>
            </Navbar.Brand>
            {isMobileView ? (
              <div className="navbar-text">
                <h6>International Society <br /> for Krishna Consciousness</h6>
              </div>
            ) : null}
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#topics"
                className={
                  activeLink === "topics" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("topics")}
              >
                Topics
              </Nav.Link>
              <Nav.Link
                href="#dates"
                className={
                  activeLink === "dates" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("dates")}
              >
                Dates
              </Nav.Link>
              <Nav.Link
                href="#prizes"
                className={
                  activeLink === "prizes" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("prizes")}
              >
                Prizes
              </Nav.Link>
              <Nav.Link
                href="#footer"
                className={
                  activeLink === "footer" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("footer")}
              >
                Contact Us
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="mailto:essayonram@gmail.com"
                  rel="noopener nonreferrer"
                  target="_blank"
                >
                  <img src={MailOutlineIcon} alt="Gmail" />
                </a>
              </div>
              <HashLink to="#registration">
                <button className="register-btn">
                  <span>Register Now</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        <DrawerComp />
        </Container>
      </Navbar>
    </Router>
  );
};

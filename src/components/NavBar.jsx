import React, { useEffect, useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import iskcon_logo from "../components/assets/svg/iskcon_logo.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router  } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={iskcon_logo} alt="iskcon_logo" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
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
                Footer
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.sonarharshad02@gmail.com/"
                  rel="noopener nonreferrer"
                  target="_blank"
                >
                  <img src={MailOutlineIcon} alt="Gmail" />
                </a>
                <a
                  href="https://wa.me/8237382014"
                  rel="noopener nonreferrer"
                  target="_blank"
                >
                  <img src={WhatsAppIcon} alt="Whatsapp" />
                </a>
              </div>
              <HashLink to="#registration">
                <button className="register-btn">
                  <span>Register Now</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

import iskcon_logo from "../components/assets/svg/iskcon_logo.svg";
import WhatsAppIcon from "../components/assets/svg/whatsapp.svg";
import MailOutlineIcon from "../components/assets/svg/gmail.svg";
import React from "react";

export default function Footer() {
  return (
    <section className="Footer" id="footer">
      <div className="footer-page">
        <div className="row">
          <div className="col-md-6 col-lg-5 col-12 ft-1">
            <img src={iskcon_logo} alt="ISKCON Logo" />
            <p>
              ISKCON TEMPLE AND NVCC, Katraj - Kondhwa Rd, Tilekar Nagar,
              Kondhwa Budruk, Pune, Maharashtra 411048
            </p>
            <div className="social-icon">
              <a
                href="mailto:amanmittal08@gmail.com"
                rel="noopener nonreferrer"
                target="_blank"
              >
                <img src={MailOutlineIcon} alt="Gmail" />
              </a>
              <a
                href="https://chat.whatsapp.com/IItZBG5rr0G4lHCvJmYtwe"
                rel="noopener nonreferrer"
                target="_blank"
              >
                <img src={WhatsAppIcon} alt="Whatsapp" />
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-12 ft-2">
            <h5><b>Quick Links</b></h5>
            <ul>
              <li className="nav-item">
                <a className="" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="" href="#topics">
                  Topics
                </a>
              </li>
              <li className="nav-item">
                <a className="" href="#dates">
                  Dates
                </a>
              </li>
              <li className="nav-item">
                <a className="" href="#prizes">
                  Prizes
                </a>
              </li>
              <li className="nav-item">
                <a className="" href="#registration">
                  Register Now
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-4 col-12 ft-3">
            <h5><b>Contact Us</b></h5>
            <p>
              <i class="fa-solid fa-phone-volume"></i>
              <a href="tel:+91 7017697871">+91 7017697871</a>
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:amanmittal08@gmail.com">amanmittal08@gmail.com</a>
            </p>
            <p>
              <i class="fa-solid fa-paper-plane"></i>
              <a href="https://www.iskconpune.com/">ISKCON NVCC Pune</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

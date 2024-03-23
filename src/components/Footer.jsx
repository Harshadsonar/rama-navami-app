import iskcon_logo from "../components/assets/svg/iskcon_logo.svg";
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
              ISKCON TEMPLE NVCC, Katraj - Kondhwa Rd, Tilekar Nagar,
              Kondhwa<br />Budruk, Pune, Maharashtra 411048
            </p>
            
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
              <a href="tel:+91 8308819263">+91 8308819263</a>
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:essayonram@gmail.com">essayonram@gmail.com</a>
            </p>
            <p>
              <i class="fa-solid fa-paper-plane"></i>
              <a href="https://www.iskconpune.com/" rel="noopener nonreferrer"
                target="_blank">ISKCON NVCC Pune</a>
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}

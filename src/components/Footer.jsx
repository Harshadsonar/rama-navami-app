import iskcon_logo from "../components/assets/svg/iskcon_logo.svg";

// export default function Footer(){
//   return (
//     <footer className="footer">
//       <Container>
//         <Row className="align-items-center">
//           <Col size={12} sm={6}>
//             <img src={iskcon_logo} alt="Logo" />
//           </Col>
//           <Col size={12} sm={6} className="text-center text-sm-end">
//             <div className="social-icon">
//               <a href="https://www.sonarharshad02@gmail.com/" target="_blank" rel="noreferrer noopener"><img src={gmail} alt="Gmail" /></a>
//               <a href="https://wa.me/8237382014" target="_blank" rel="noreferrer noopener"><img src={whatsapp} alt="Whatsapp" /></a>
//             </div>
//             <p>Copyright 2024. All Rights Reserved</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   )
// }


export default function Footer () {
    return (
        
            <section className="Footer" id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                        <img src={iskcon_logo} alt="ISKCON Logo" />
                            <p>ISKCON TEMPLE AND NVCC, Katraj - Kondhwa Rd, Tilekar Nagar, Kondhwa Budruk, Pune, Maharashtra 411048</p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-whatsapp"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Topics</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Dates</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Prizes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Register Now</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Contact Us</h5>
                            <p><i class="fa-solid fa-phone-volume"></i>+91 7017697871</p>
                            <p><i class="fa-solid fa-envelope"></i>test048@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i>ISKCON NVCC, Pune</p>
                        </div>
                    </div>
                </div>
            </section>
        
    )
}

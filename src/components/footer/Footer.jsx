import { Container, Row, Col } from "react-bootstrap";
import iskcon_logo from "../img/iskcon_logo.svg";
import gmail from '../img/gmail.svg';
import whatsapp from '../img/whatsapp.svg';
import "./Footer.css";

export default function Footer(){
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={iskcon_logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.sonarharshad02@gmail.com/" target="_blank" rel="noreferrer noopener"><img src={gmail} alt="Gmail" /></a>
              <a href="https://wa.me/8237382014" target="_blank" rel="noreferrer noopener"><img src={whatsapp} alt="Whatsapp" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
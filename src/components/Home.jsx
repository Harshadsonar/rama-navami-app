import img1 from "../components/assets/img/ram-murti-ayodhya-hd-photo3-690x1536.jpeg";
import img2 from "../components/assets/img/img1.jpg";
import 'animate.css';

export default function Home() {
  
  return (
    <section id='home'>
      <div className="banner">
        <img className="banner-img2" src={img2} alt="Ram Mandir" />
        <div>
          <img className='animate__bounceInDown banner-img1' src={img1} alt="Ram Murti" />
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
      <a href="#registration" smooth><button className="register-button">Register Now</button></a>
      </div>
    </section>
  )
}

import React, { useState } from "react";
import img2 from "../components/assets/img/person.png";
import img3 from "../components/assets/img/PhBriefcaseSimpleThin.png";
import img4 from "../components/assets/img/MaterialSymbolsPhoneAndroid.png";
import img5 from "../components/assets/img/GameIconsAges.png";
import img7 from "../components/assets/img/email.png";
import WhatsAppIcon from "../components/assets/svg/whatsapp.svg";
import { ScaleLoader } from "react-spinners";


export default function Registration() {
  const [data, setData] = useState({
    name: "",
    profession: "",
    college: "",
    age: "",
    mobileNumber: "",
    email: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const { name, profession, college, age, mobileNumber, email } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowLoader(true);

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/harshadsonar02/google_sheets/TqlCOfuEAPvbyWTJ?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, profession, college, age, mobileNumber, email],
          ]),
        }
      );
      await response.json();
      setData({
        ...data,
        name: "",
        profession: "",
        college: "",
        age: "",
        mobileNumber: "",
        email: "",
      });
      setTimeout(() => {
        setShowLoader(false); 
        setShowPopup(true); 
      }, 5000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section
      className="registration-page"
      id="registration"
      style={{ height: "90vh" }}
    >
       {(!showPopup && !showLoader) && (
      <form onSubmit={handleSubmit} action="#" className="sign-up-form">
        <h2 className="title">REGISTRATION FORM</h2>
        <div className="input-field">
          <img src={img2} alt="name" />
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Your Full Name"
            autoComplete="on"
            autoSave="on"
            required
          />
        </div>

        <div className="input-field">
          <img src={img3} alt="profession" />
          <select
            name="profession"
            value={profession}
            onChange={handleChange}
            autoComplete="on"
            autoSave="on"
            required
          >
            <option value="">Select your Profession</option>
            <option value="student">Student</option>
            <option value="working">Working</option>
          </select>
        </div>

        <div className="input-field">
          <img src={img3} alt="college" />
          <input
            type="text"
            name="college"
            value={college}
            onChange={handleChange}
            autoComplete="on"
            autoSave="on"
            placeholder="Organization Name"
            required
          />
        </div>

        <div className="input-field">
          <img src={img5} alt=""/>
          <input
            type="number"
            name="age"
            value={age}
            onChange={handleChange}
            autoComplete="on"
            autoSave="on"
            placeholder="Age"
            required
          />
        </div>

        <div className="input-field">
          <img src={img4} alt="mobileNumber" />
          <input
            type="tel"
            value={mobileNumber}
            onChange={handleChange}
            autoComplete="on"
            autoSave="on"
            name="mobileNumber"
            pattern="[0-9]{10}"
            placeholder="Phone Number"
            required
          />
        </div>

        <div className="input-field">
          <img src={img7} alt="" />
          <input
            type="email"
            value={email}
            onChange={handleChange}
            autoComplete="on"
            autoSave="on"
            name="email"
            placeholder="Email Address"
            required
          />
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
       )}
       {showLoader && (
        <div className="loader">
          <p>Submitting...</p>
          <ScaleLoader color="#36d7b7" />
        </div>
      )}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Form Submitted Successfully!</h3>
            <p>Thank you for registering. <br /> Join our Whatsapp Group for Further Updates.</p>
            <div className="social-icon submit-icon">
              <a
                href="https://chat.whatsapp.com/IItZBG5rr0G4lHCvJmYtwe"
                rel="noopener nonreferrer"
                target="_blank"
              >
                <img src={WhatsAppIcon} alt="Whatsapp" />
              </a>
            </div><br />
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

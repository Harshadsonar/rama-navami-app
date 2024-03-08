import React, { useState } from 'react'
import "./Dates.css";

export default function Dates() {

    const [dates, setDates] = useState(false);

  const toggleModal = () => {
    setDates(!dates);
  };

  if(dates) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <>
    <button onClick={toggleModal} className="btn-modal">
        IMP Dates
      </button>
      {dates && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Important Dates</h2>
            <p>Last Date of Submission is 5<sup>th</sup> April 2024</p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  )
}

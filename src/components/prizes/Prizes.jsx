import React, { useState } from 'react'
import "./Prizes.css";

export default function Prizes() {

    const [prizes, setPrizes] = useState(false);

  const toggleModal = () => {
    setPrizes(!prizes);
  };

  if(prizes) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <>
    <button onClick={toggleModal} className="btn-modal">
        Prizes
      </button>
      {prizes && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Prizes</h2>
            <p>1st Prize - Rs2500/- worth Gift Pack</p>
            <p>2nd Prize - Rs1500/- worth Gift Pack</p>
            <p>3rd Prize - Rs500/- worth Gift Pack</p>
            <p>5 Special Consolation Prizes</p><p>&</p>
            <p>Certificate Signed by Dr. Vijay Bhatkar Sir (Padmashree & prominent scientist of India)</p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  )
}

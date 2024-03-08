import React, { useState } from 'react'
import "./modal.css";

export default function Modal() {

    const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <>
    <button onClick={toggleModal} className="btn-modal">
        Topics
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Topics</h2>
            <p>Lessons to learn from Lord Ram’s Ideal leadership and management</p><p>OR</p>
            <p>Ideology of Ram is universal, not limited to India or to any religion/caste/creed</p><p>OR</p>
            <p>An ideal behaviour of Lord Ram in various roles a contrast of modern life</p><p>OR</p>
            <p>Misconception VS proper concept of Ramayan</p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  )
}

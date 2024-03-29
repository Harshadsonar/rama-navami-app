import React from 'react';

export default function Dates() {
  return (
    <section className="dates-page" id='dates'>
      <h2 className="title">IMPORTANT INFO</h2>
      <div className="date-info">
        <p className="date">Last Date of Submission is <b>Friday, 12<sup>th</sup> April 2024</b></p>
        <p><b>Languages</b></p>
        <ul style={{color:"#000", listStyleType:"none"}}>
          <li>English</li>
          <li>Hindi</li>
          <li>Marathi</li>
        </ul>
        <br />
        <p>Submit in <b>600 - 1000</b> Words</p>
      </div>
    </section>
  );
}



import './App.css';


// PatientDetails.js

import React, { useState } from 'react';
import './PatientDetails.css';

const PatientDetails = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState(''); // 'Male', 'Female', 'Others'
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [complain, setComplain] = useState('');

  const handlePayNow = () => {
    // Handle payment logic here
  };

  const handleUseVoucher = () => {
    // Handle voucher logic here
  };

  return (
    <div className="patient-details-container">
      <div className="header">
        <h1>Patient Details</h1>
      </div>

      <form className="patient-form">
        <label htmlFor="name">Patient's Name:</label>
        <input
          type="text"
          id="name"
          className="input-field patient-name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="age">Age:</label>
        <input
          type="date"
          id="age"
          className="input-field patient-age-input"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <label>Gender:</label>
        <div className="gender-radio-container">
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            className="gender-radio-input"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
            required
          />

          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            name="gender"
            className="gender-radio-input"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
            required
          />

          <label htmlFor="others">Others</label>
          <input
            type="radio"
            id="others"
            name="gender"
            className="gender-radio-input"
            value="Others"
            onChange={(e) => setGender(e.target.value)}
            required
          />
        </div>

        <label htmlFor="mobile">Mobile Number:</label>
        <input
          type="tel"
          id="mobile"
          className="input-field mobile-input"
          pattern="[0-9]{11}"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="input-field email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="complain">Presenting Complain:</label>
        <textarea
          id="complain"
          className="input-field complain-textarea"
          value={complain}
          onChange={(e) => setComplain(e.target.value)}
          required
        ></textarea>

        <div className="button-container">
          <button className="pay-now-button" onClick={handlePayNow}>
            Pay Now
          </button>
          <button className="use-voucher-button" onClick={handleUseVoucher}>
            Use Voucher
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientDetails;

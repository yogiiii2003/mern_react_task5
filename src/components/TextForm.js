import React, { useState } from "react";

export default function TextForm() {
  const [birthDate, setBirthDate] = useState("");
  const [years, setYears] = useState(null);

  const calculateAge = (date) => {
    if (!date) return;
    const currentDate = new Date();
    if (new Date(date) > currentDate) {
      setBirthDate("");
      setYears(null);
      alert("Invalid Date of Birth");
      return;
    }
    const diffTime = currentDate - new Date(date);
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setYears(Math.floor(totalDays / 365.25));
  };

  const handleInputChange = (e) => {
    setBirthDate(e.target.value);
  };

  const handleButtonClick = () => {
    calculateAge(birthDate);
  };

  return (
    <div className="container mb-3">
      <h1 className="d-flex align-items-center justify-content-center my-3">
        <b>Age Calculator</b>
      </h1>
      <h5
        htmlFor="exampleFormControlInput1"
        className="d-flex align-items-center justify-content-center"
      >
        <b>Enter your date of birth</b>
      </h5>
      <div className="d-flex align-items-center justify-content-center my-2">
        <input
          type="date"
          className="form-control w-50"
          value={birthDate}
          onChange={handleInputChange}
        />
      </div>
      <div className="d-flex align-items-center justify-content-center my-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleButtonClick}
        >
          Calculate Age
        </button>
      </div>
      {birthDate && (
        <div className="d-flex align-items-center justify-content-center my-3 ">
          <h4>
            <b>You are {years} years old</b>
          </h4>
        </div>
      )}
    </div>
  );
}

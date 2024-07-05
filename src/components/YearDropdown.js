import React from 'react';
import './YearDropdown.css';

const YearDropdown = ({ selectedYear, onYearChange }) => {
  const years = ['', '2024-25', '2023-24', '2022-23']; // Add an empty option for initial state

  return (
    <select value={selectedYear} onChange={onYearChange}>
      {years.map((year, index) => (
        <option key={index} value={year}>
          {year ? year : 'Select Year'} {/* Default option text */}
        </option>
      ))}
    </select>
  );
};

export default YearDropdown;

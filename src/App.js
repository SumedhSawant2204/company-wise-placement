import React, { useState } from 'react';
import NavBar from './components/NavBar';
import YearDropdown from './components/YearDropdown';
import PlacementTable from './components/PlacementTable';
import './App.css';
import { exportToExcel } from './utils/exportUtils';

function App() {
  const [selectedYear, setSelectedYear] = useState('');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleExport = () => {
    exportToExcel(selectedYear);
  };

  return (
    <div className="App">
      <NavBar />
      <div className="controls">
        <YearDropdown selectedYear={selectedYear} onYearChange={handleYearChange} />
        {selectedYear && (
          <button className="export-button" onClick={handleExport}>
            Export to Excel
          </button>
        )}
      </div>
      {selectedYear && <PlacementTable selectedYear={selectedYear} />}
    </div>
  );
}

export default App;

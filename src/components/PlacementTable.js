import React from 'react';
import './PlacementTable.css';

const sampleData = {
  '2024-25': [
    {
      id: 1,
      companyName: 'TechCorp',
      computerEngineering: 5,
      informationTechnology: 3,
      electronicsTelecommunication: 4,
      total: 12,
      csItExtcElex: '0',
      package: '10 LPA',
      campusMode: 'On',
    },
    {
      id: 2,
      companyName: 'Innovate Solutions',
      computerEngineering: 4,
      informationTechnology: 6,
      electronicsTelecommunication: 2,
      total: 12,
      csItExtcElex: '0',
      package: '8 LPA',
      campusMode: 'Off',
    },
    {
      id: 3,
      companyName: 'NextGen Tech',
      computerEngineering: 3,
      informationTechnology: 2,
      electronicsTelecommunication: 5,
      total: 10,
      csItExtcElex: '1',
      package: '12 LPA',
      campusMode: 'On',
    },
  ],
  '2023-24': [
    {
      id: 1,
      companyName: 'Alpha Inc.',
      computerEngineering: 6,
      informationTechnology: 2,
      electronicsTelecommunication: 3,
      total: 11,
      csItExtcElex: '0',
      package: '11 LPA',
      campusMode: 'On',
    },
    {
      id: 2,
      companyName: 'Beta Tech',
      computerEngineering: 5,
      informationTechnology: 4,
      electronicsTelecommunication: 3,
      total: 12,
      csItExtcElex: '0',
      package: '9 LPA',
      campusMode: 'Off',
    },
  ],
  '2022-23': [
    {
      id: 1,
      companyName: 'Gamma Solutions',
      computerEngineering: 7,
      informationTechnology: 5,
      electronicsTelecommunication: 6,
      total: 18,
      csItExtcElex: '0',
      package: '10 LPA',
      campusMode: 'On',
    },
    {
      id: 2,
      companyName: 'Delta Corp',
      computerEngineering: 4,
      informationTechnology: 3,
      electronicsTelecommunication: 5,
      total: 12,
      csItExtcElex: '1',
      package: '8 LPA',
      campusMode: 'On',
    },
  ],
};

const PlacementTable = ({ selectedYear }) => {
  const data = sampleData[selectedYear] || [];

  return (
    <div>
      <h2>Companywise Placement Drives ({selectedYear})</h2>
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name of Company</th>
            <th>Computer Engineering</th>
            <th>Information Technology</th>
            <th>Electronics & Telecommunication Engineering</th>
            <th>Total</th>
            <th>CS/IT(0) EXTC/ELEX(1)</th>
            <th>Package</th>
            <th>Campus Mode (On or Off)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id}>
              <td>{index + 1}</td>
              <td>{row.companyName}</td>
              <td>{row.computerEngineering}</td>
              <td>{row.informationTechnology}</td>
              <td>{row.electronicsTelecommunication}</td>
              <td>{row.total}</td>
              <td>{row.csItExtcElex}</td>
              <td>{row.package}</td>
              <td>{row.campusMode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlacementTable;

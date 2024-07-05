import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

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

export const exportToExcel = (selectedYear) => {
  const data = sampleData[selectedYear] || [];

  // Create a new workbook and add the data
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Placements');

  // Convert the workbook to a Blob and save it
  const excelBuffer = XLSX.write(workbook, {
    bookType: 'xlsx',
    type: 'array',
  });
  const dataBlob = new Blob([excelBuffer], { type: 'application/octet-stream' });
  saveAs(dataBlob, `Placements_${selectedYear}.xlsx`);
};

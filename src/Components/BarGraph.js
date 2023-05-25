import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarGraph = () => {
  // Data for the bar graph
  const data = {
    labels: [
      'M1: Improper Platform Usage',
      'M2: Insecure Data Storage',
      'M3: Insecure Communication',
      'M5: Insufficient Cryptography',
      'M7: Client Code Quality',
      'M6: Insecure Authorization',
      'M10: Extraneous Functionality',
    ],
    datasets: [
      {
        label: 'OWASPdistribution',
        data: [3, 1, 1, 2, 1, 1, 1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // M1
          'rgba(54, 162, 235, 0.6)', // M2
          'rgba(255, 206, 86, 0.6)', // M3
          'rgba(75, 192, 192, 0.6)', // M5
          'rgba(153, 102, 255, 0.6)', // M7
          'rgba(255, 159, 64, 0.6)', // M6
          'rgba(255, 99, 132, 0.6)', // M10
        ],
      },
    ],
  };

  return <Bar data={data} />;
};

export default BarGraph;

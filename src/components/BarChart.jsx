// 'use client';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Tooltip,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Tooltip
// );

// const BarChart = () => {
//   const data = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     datasets: [
//       {
//         label: 'Revenue',
//         data: [40, 70, 45, 90, 65, 80, 50, 85, 60, 95, 75, 55],
//         backgroundColor: '#cfbcff33',
//         borderRadius: 10,
//         hoverBackgroundColor: '#cfbcff',
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         enabled: true,
//       }
//     }
//   };

//   return (
//     <div className="w-full h-48">
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default BarChart;

'use client';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
);

const BarChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: [40, 70, 45, 90, 65, 80, 50, 85, 60, 95, 75, 55],
        backgroundColor: '#cfbcff33',
        borderRadius: 8,
        hoverBackgroundColor: '#cfbcff',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#1d1b20',
        titleColor: '#cfbcff',
        bodyColor: '#e6e0e9',
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
          color: '#948e9c',
          font: {
            size: 11
          }
        },
        grid: {
          color: '#49455133',
          drawBorder: false,
        }
      },
      x: {
        ticks: {
          color: '#948e9c',
          font: {
            size: 11
          }
        },
        grid: {
          display: false,
        }
      }
    }
  };

  return (
    <div className="w-full h-82 p-4 glass rounded-2xl">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
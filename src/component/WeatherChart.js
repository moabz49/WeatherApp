import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { data } from '../data/data';

const WeatherChart = ({ forecastday, getDayOfWeek }) => {
  // State variables to manage hour index, data type, and chart data
  const [hourIndex, setHourIndex] = useState(0);
  const [dataType, setDataType] = useState('temp_c');
  const [chartData, setChartData] = useState(null);
  const [chartOptions, setChartOptions] = useState(null);

  // Function to format the time in HH:00 format
  const formatTime = (index) => {
    const hour = String(index).padStart(2, '0');
    return `${hour}:00`;
  };

  // Effect to update chart data based on hourIndex, dataType, and forecastday changes
  useEffect(() => {
    // Ensure forecastday has data before processing
    if (forecastday.length === 0) return;

    // Map through forecastday to update hour data for the selected hourIndex
    const updatedForecastDay = forecastday.map((day) => {
      const updatedHour = { ...day.hour[hourIndex], time: formatTime(hourIndex) };
      const updatedHourList = day.hour.map((_, i) => (i === hourIndex ? updatedHour : day.hour[i]));
      return { ...day, hour: updatedHourList };
    });

    // Generate labels for the X-axis (days)
    // const labels = updatedForecastDay.map((_, index) => `Day ${index + 1}`);
    const labels = forecastday.map((day) => (
        getDayOfWeek(day.date)
    ))
    // Extract the data for the selected dataType and hourIndex
    const chartDataField = updatedForecastDay.map((day) => day.hour[hourIndex][dataType]);

    // Construct the chart data object for Line chart
    const updatedChartData = {
      labels,
      datasets: [
        {
          label: `${dataType.toUpperCase()}`,
          data: chartDataField,
          fill: true,
          borderColor: 'orange', // Change the line color to orange
          backgroundColor: 'rgba(255, 159, 64, 0.4)', // Change the area color if fill is enabled
          pointBackgroundColor: 'orange', // Change point color to orange
          pointBorderColor: 'orange', // Change point border color if needed
          pointHoverBackgroundColor: 'orange', // Change point hover background color
          pointHoverBorderColor: 'gray',
        },
      ],
    };

    const options = {
      scales: {
        x: {
          grid: {
            display: true, // Hide X-axis grid lines
          },
        },
        y: {
          beginAtZero: true, // Start Y-axis from zero
        },
      },
      plugins: {
        tooltip: {
          backgroundColor: 'orange', // Change tooltip background color
          titleColor: 'white', // Change tooltip title color
          bodyColor: 'white', // Change tooltip body text color
        },
      },
      responsive: true, // Enable responsiveness
      maintainAspectRatio: false, 
    };
    
    // Set the updated chart data and options
    setChartData(updatedChartData);
    setChartOptions(options);
  }, [hourIndex, dataType, forecastday]); // Dependency array for useEffect

  return (
    <section className='flex flex-col w-full h-full border-2 border-orange-400 max-w-[1440px]'>
      <p className='text-xl xs:text-3xl p-2 bg-gray-800/60 rounded-lg flex items-start capitalize text-orange-500'> Weekly&nbsp;<span className='text-slate-200'>Forecast</span> </p>
      
      <div className='bg-gray-800/80 flex flex-col p-4 md:p-[32px] space-y-2 sm:space-y-8 justify-center items-center'>
       <div className='flex flex-col sm:flex-row justify-center items-center sm:space-x-8 space-y-2'>
          <div className='flex gap-x-4 capitalize text-xs sm:text-sm'>
            {/* Dropdown to select the hour */}
            <label className='text-[10px] xs:text-base'>Select Hour:</label>
            <select className='bg-transparent border-[1.5px] border-orange-400 rounded-md outline-none focus:border-white' onChange={(e) => setHourIndex(parseInt(e.target.value))}>
              {forecastday[0]?.hour.map((_, index) => (
                <option key={index} value={index}>
                  {formatTime(index)}
                </option>
              ))}
            </select>
          </div>
            {/* Dropdown to select data type */}
          <div className='flex gap-x-4 capitalize text-xs sm:text-sm'>
           <label className='text-[10px] xs:text-base'>Select Data Type:</label>
           <select className='bg-transparent border-[1.5px] text-[10px] border-orange-400 rounded-md outline-none focus:border-white' onChange={(e) => setDataType(e.target.value)}>
              {data.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
          {/* Render the Line chart if chartData is available */}
        {chartData && <Line className='xs:min-h-[320px] min-h-[320px] max-h-[560px] w-full rounded-lg max-w-[1200px]' data={chartData} options={chartOptions} />}
       </div> 
    </section>
  );
};

export default WeatherChart;

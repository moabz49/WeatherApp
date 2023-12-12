import React, { useState } from 'react';
import { fetchWeatherData } from '../api';
// import SearchIcon from '../images/Vector.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = ({ query, setQuery, setWeatherForecast, setError, setLoading }) => {

  const handleKeyDown = async (e) => {
    try {
      // Check if the key pressed is 'Enter' and query is not empty
      if (e.key === 'Enter' && query.trim() !== '') {
        setLoading(true); // Set loading to true
       
        // Add a 3-second delay
        await new Promise(resolve => setTimeout(resolve, 3000));

        const data = await fetchWeatherData(query);
        setWeatherForecast(data);
        setQuery('');
        toast("Weather data fetched successfully!", {
          type: "success",
          // for small screens
          autoDismiss: true, // Enable auto-dismiss
          autoDismissTimeout: 3000, // Set timeout to 3000 milliseconds (3 seconds)
        });
      }
    } catch (error) {
      setError(`${error.message}: We couldn't find weather information for that location. Please try another city or country. `);
      toast("Sorry, we encountered an issue while fetching weather data. Please try again later.", {
        type: "info",
        // for small screens
        autoDismiss: true, // Enable auto-dismiss
        autoDismissTimeout: 3000, // Set timeout to 3000 milliseconds (3 seconds)

      });
      setQuery('');

      // Clear the error after 3 seconds
      setTimeout(() => {
        setError(null);
      }, 3000);
    } finally {
      setLoading(false); // Set loading to false after the API call is completed
    }
  };

  return (
    <section className="w-full flex mx-auto mx-w-[1490px] mt-[10px]">
      <div className='flex w-full justify-between items-center px-[4px] mt-[10px] '>
        <div className='flex w-[60%] space-x-2 items-center py-[12px] border-b-2 border-gray-800/80 pr-[8px]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-800/80">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
                type="text"
                className="bg-transparent font-light text-lg shadow-2xl w-full placeholder:text-gray-800/80 hover:outline-none focus:outline-none"
                placeholder="search ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
        <div className='flex items-center text-center font-bold sm:text-xl'>
            Weather App.
        </div>
      </div>
    </section>
  );
}

export default Navbar;


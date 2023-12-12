import React from 'react';
import Panel from '../component/Panel';
import Cards from '../component/Cards';
import Details from '../component/Details';
import WeatherChart from '../component/WeatherChart';
import Footer from '../component/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ weatherForecast, theError, loading }) => {

  function getDayOfWeek(dateString) {
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString('en-US', { weekday: 'long' });
  }

  if (loading) {
    return (
      <div className="justify-center items-center flex flex-col space-y-2 h-screen">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white animate-spin">
          <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
        </svg>
        <h5>Loading...</h5>
      </div>
    );
  }

  if (theError) {
    return (
      <>
      <ToastContainer position="top-right" newestOnTop />
      <div className='justify-center items-center flex flex-col space-y-2 h-screen font-base text-[32px] text-center text-blue-500'>Info: <span className='text-white text-sm'>{theError}</span></div>
      </>
    );
  }

  if (!weatherForecast) {
    return (
      <div className='flex flex-col justify-center items-center h-screen space-y-4'>
        <h1 className='text-3xl xs:text-4xl font-semibold'>
          Welcome to the <span className='text-orange-500'>Weather</span> App <br />
        </h1>
        <span className='text-base capitalize leading-tighter'>Enter a <span className='text-orange-500'>City</span> or <span className='text-orange-500'>country</span> name to <span className='mb-2 border-b-2 border-orange-500'>get the Weather Forecast.</span></span>
      </div>
    );
  }

  const { location, current, forecast: { forecastday } } = weatherForecast;

  return (
    <div className='flex-col w-full h-full px-[8px] space-y-[60px] mt-[20px]'>
      <ToastContainer position="top-right" newestOnTop />
      <div className='md:flex md:space-x-10 space-y-16 md:space-y-0 w-full '>
        <Panel current={current} location={location} getDayOfWeek={getDayOfWeek} />
        <Details current={current} forecastday={forecastday} />
      </div>
      <Cards forecastday={forecastday} getDayOfWeek={getDayOfWeek} />
      <WeatherChart forecastday={forecastday} getDayOfWeek={getDayOfWeek} />
      <Footer />
    </div>
  );
};

export default Card;

import React, { useState, useEffect } from 'react';

const Panel = ({ location, getDayOfWeek, current }) => {
  const [uvLevel, setUvLevel] = useState(null);

  useEffect(() => {
    updateUvLevel(current.uv);
  }, [current.uv]);

  const ultraViolet = Number(current.pressure_in);

  const updateUvLevel = (ultraViolet) => {
    if (ultraViolet === 0 || ultraViolet <= 2) {
      setUvLevel('Low');
    } else if (ultraViolet <= 5) {
      setUvLevel('Moderate');
    } else if (ultraViolet <= 7) {
      setUvLevel('High');
    } else {
      setUvLevel('Very High');
    }
  };

  return (
    <section className='md:max-w-[320px] xl:max-w-[400px] flex-col text-start py-[36px] px-[16px] rounded-lg items-start space-y-2 w-full border-teal-orange border-2 border-orange-400 bg-gray-800/60'>
      <div className='flex space-x-2 items-center '>
        <div className='flex-col'>
          <h3 className='text-[36px] md:text-[28px]'>Today</h3>
          <p className='md:text-sm flex items-center'>{getDayOfWeek(current.last_updated)}, {current.last_updated}</p>
        </div>
        <img src={current.condition?.icon} alt="icon" />
      </div>
      <h2 className='text-5xl '>{current?.temp_c}°C</h2>
      <p className='md:text-xs '>{current.condition.text}</p>
      <p className='bg-white md:w-[70%] font-semibold text-xs py-[4px] px-[4px] rounded-lg flex items-center text-gray-800/80 '>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6 text-gray-800/80">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>

        {location?.name}, {location?.country}
      </p>
      <div className='flex items-start w-full justify-between text-xs sm:text-sm sm:max-w-[70%] xl:max-w-[70%] md:max-w-[100%]'>
        <p className='flex items-center'>Clouds<br/>
          {current.cloud}%
        </p>
        <p>{current.f}</p>
        <p className='flex items-center '>Air Pressure<br/>
          {Math.round(current.pressure_in)}%
        </p>
        <div className='flex-col flex items-center'>
          <span>Uv level {current.uv}</span>
          <span className={`rounded-md px-4 py-1 text-xs text-gray-800/80 ${uvLevel === 'Low' ? 'bg-emerald-500' : uvLevel === 'Moderate' ? 'bg-amber-400' : uvLevel === 'High' ? 'bg-orange-500' : 'bg-red-500'}`}>
            {uvLevel}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Panel;

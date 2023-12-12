import React from 'react'

const Cards = ({forecastday, getDayOfWeek}) => {
  return (
    <section className='flex flex-col w-full border-orange-400 border-2 rounded-lg'>
      <p className='text-xl xs:text-2xl sm:text-3xl p-2 bg-gray-800/20 rounded-lg flex items-start capitalize text-orange-500'>Upcoming&nbsp;<span className='text-slate-200'>Forecast</span> </p>
      <div className='flex flex-wrap gap-2 lg:space-x-2 lg:flex-nowrap items-center justify-center lg:justify-between font-bold w-full bg-gray-800/60 p-10'>
          {forecastday?.map((data, i) => (
            <div className="flex flex-col bg-gray-600/40 md:px-[16px] py-[8px] px-[28px]  lg:py-[4px] shadow-lg rounded-md shadow-black items-center space-y-4 text-sm " key={i}>
                      {/* day + icon */}
                  <p className='capitalize'>{getDayOfWeek(data.date)}</p>
                  <p className='text-xs font-normal'>{data.date}</p>
                  <img src={data?.day?.condition?.icon} className="pb-1 border-b border-gray-600" alt="icon"/>
                      {/* highest + lowest */}
                  <p className=''>H&nbsp;&nbsp;{Math.round(data?.day.maxtemp_c)}<span className='text-xs'>&nbsp;℃</span></p>
                  <p>L&nbsp;&nbsp;{Math.round(data?.day.mintemp_c)}<span className='text-xs'>&nbsp;℃</span></p>

              </div>
          ))}
      </div>
    </section>

  )
}

export default Cards
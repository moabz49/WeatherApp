import React from 'react'
import HighlightsCard from './HighlightsCard'

import Wind from '../images/Air.svg';
import Visibility from '../images/Eye.svg';
import Humidity from '../images/Humidity.svg';
import WindDirection from '../images/Safari.svg';
import Precipitation from '../images/Rain.svg';
import Sunrise from '../images/Sunrise.svg';
import Sunset from '../images/Sunset.svg';
import FeelsLike from '../images/Thermometer.svg';





const Details = ({current, forecastday }) => {
  return (
    <div className='flex flex-col w-full border-orange-400 rounded-lg border-2'>
        <p className='text-xl xs:text-2xl sm:text-3xl p-2 bg-gray-800/20 rounded-lg flex items-start capitalize text-orange-400'>Today&nbsp; <span className='text-white'> Highlights</span> </p>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  lg:gap-6 gap-4 w-full px-[16px] py-[28px] bg-gray-800/60 text-sm'>
            {/* wind speed */}
            <HighlightsCard icon={Wind} title="Wind Speed">
                {current.wind_mph} mph
            </HighlightsCard>
            {/* humidity */}
            <HighlightsCard icon={Humidity} title="Humidity">
                {current.humidity}%
            </HighlightsCard>
            {/* wind direction */}
            <HighlightsCard icon={WindDirection} title="Wind Direction">
                {current.wind_dir}<br/>
                {current.wind_degree} degree
            </HighlightsCard>
            {/* sunrise time*/}
            <HighlightsCard icon={Sunrise} title="Sunrise Time">
                {forecastday[0]?.astro?.sunrise}
            </HighlightsCard>
            {/* sunset time*/}
            <HighlightsCard icon={Sunset} title="Sunset Time">
                {forecastday[0]?.astro?.sunset}
            </HighlightsCard>
            {/* feels like temp */}
            <HighlightsCard icon={FeelsLike} title="Feels Like">
                {current.feelslike_c} °C<br/>
                {current.feelslike_f} °f
            </HighlightsCard>
            {/* precipitation */}
            <HighlightsCard icon={Precipitation} title="Precipitation">
                {current.precip_mm} mm
            </HighlightsCard>
            {/* visibility km */}
            <HighlightsCard icon={Visibility} title="Visibility">
                {current.vis_miles} mph<br/>
                {current.vis_km} kmh
            </HighlightsCard>
        </div>
    </div>
  )
}

export default Details
import React from 'react'

const Footer = () => {
  return (
    <section className='text-center space-y-2'>
      <p className='text-[10px] xs:text-[12px] lg:text-[14px]'>
        Weather data, forecasts, and information provided within this app are sourced from reputable providers and are subject to their terms and conditions. Use of this data is for personal use only and should not be repurposed without proper attribution.{' '}
        <span className='font-bold'>WeatherApp</span>{' '}
        <span className='italic underline'>and its logo</span> are{' '}
        <span className='font-semibold'>trademarks owned by WeatherApp</span>. All other{' '}
        <span className='italic'>trademarks</span>, service marks, and logos used in this application are the property of their respective owners.
      </p>
      <p className='text-[12px] xs:text-[14px] lg:text-[16px]'> © 2023 WeatherApp. All rights reserved.</p>

    </section>
  )
}

export default Footer;
import React from 'react';

const HighlightsCard = ({ icon, title, children }) => {
  return (
    <div className='flex justify-between bg-gray-600/10 p-[16px] xl:p-[18px] w-full rounded-xl shadow-lg shadow-black'>
      <div className='flex flex-col justify-between'>
        {title && <p className='font-semibold md:text-[12px] text-[16px]'>{title}</p>}
            <div className='flex items-center'>{children}</div>
       </div>
        {icon && <img src={icon} alt="icon" className='w-8 h-8 flex items-start ' />}
    </div>
  );
};

export default HighlightsCard;

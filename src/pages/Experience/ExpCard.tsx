import React from 'react';

interface ExpCardProps {
  title: string;
  date: string;
  description: string[];
  techs: string[];
  imgUrl: string;
}

export default function ExpCard({
  title,
  date,
  description,
  techs,
  imgUrl,
}: ExpCardProps) {
  return (
    <div className='flex flex-col justify-between h-full space-y-4 rounded-xl p-5 bg-[#17182c]'>
      <img
        src={imgUrl}
        alt='card cover'
        className='flex flex-1 w-full object-cover min-h-[6rem] max-h-full rounded-xl'
      />

      <div className='group text-[#e1e7ec]'>
        <div className='flex justify-between font-bold my-2'>
          <h5>{title}</h5>
          <h6 className='font-normal'>{date}</h6>
        </div>
        <p className='text-xs'>{description}</p>
        <div className='flex items-center space-x-3 mt-1 text-xs'>{techs}</div>
      </div>
    </div>
  );
}

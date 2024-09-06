import React from 'react';

interface CardProps {
  title: string;
  date: string;
  description: string[];
  techs: string[];
  imgUrl: string;
}

export default function Card({
  title,
  date,
  description,
  techs,
  imgUrl,
}: CardProps) {
  return (
    <div className='flex flex-col justify-between h-full space-y-4 rounded-xl p-5 bg-primary'>
      <img
        src={imgUrl}
        alt='card cover'
        className='flex flex-1 w-full object-cover min-h-[6rem] max-h-full rounded-xl'
      />

      <div className='group text-secondary'>
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

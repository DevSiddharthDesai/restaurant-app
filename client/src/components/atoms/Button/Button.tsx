import React from 'react';

const Button = ({ title }: { title: string }) => {
  return (
    <button className='bg-primary border-transparent rounded-md p-4 text-secondary font-semibold'>
      {title}
    </button>
  );
};

export default Button;

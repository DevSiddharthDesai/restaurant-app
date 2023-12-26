import React from 'react';

const Bottomdots = () => {
  return (
    <div className='bottom-dots'>
      <span
        className='dot line-dot'
        style={{
          borderRight: '40px solid #FFCC00',
          width: '4px',
          height: '3px',
          position: 'relative',
          display: 'inline-block',
          marginRight: '1px',
        }}
      ></span>
      <span
        className='dot'
        style={{
          borderRight: '3px solid #FFCC00',
          width: '4px',
          height: '3px',
          position: 'relative',
          display: 'inline-block',
          marginRight: '1px',
        }}
      ></span>
      <span
        className='dot'
        style={{
          borderRight: '3px solid #FFCC00',
          width: '4px',
          height: '3px',
          position: 'relative',
          display: 'inline-block',
          marginRight: '1px',
        }}
      ></span>
      <span
        className='dot'
        style={{
          borderRight: '3px solid #FFCC00',
          width: '4px',
          height: '3px',
          position: 'relative',
          display: 'inline-block',
          marginRight: '1px',
        }}
      ></span>
    </div>
  );
};

export default Bottomdots;

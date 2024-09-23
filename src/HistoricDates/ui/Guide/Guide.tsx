import React from 'react';
import ButtonGuide from './ButtonGuide/ButtonGuide';

const Guide = () => {

    return (
        <>
        <ButtonGuide value={1} isActive = {false}/>
             <svg
            viewBox="0 0 100 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            
            <circle
              cx="50"
              cy="40"
              r="30"
              fill="none"
              stroke="rgba(66, 86, 122, 0.2)"
              stroke-width="0.2"
            />
          </svg>
          
        </>
    );
};

export default Guide;
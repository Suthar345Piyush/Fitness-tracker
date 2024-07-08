import React from 'react';
import './Summary.css';

const summary = ({steps, calories}) => {
  

  return(
    <div className="summary">
      <h2>Summary</h2>
      <p>Total Steps: {steps}</p>
      <p>Total Calories: {calories}</p>
    </div>
  );
}


export default summary;

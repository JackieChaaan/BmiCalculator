import React from 'react';
import './BmiType.css'

export default function BmiType({ value, bmitype, change }) {
  return (
    <div className='bmiType'>
      <p className='bmiScoreTxt'>Your BMI Score</p>
      <div className="bmiScore">
        {value}
      </div>
      <div className="Type">
        {bmitype}
      </div>
      <div className="Change">
        {change.type === 'Positive' && (<div className='change'>"You Need to Loss <span className='fw-bold'>{change.wght}</span> Kg"</div>)}
        {change.type === 'Negative' && (<div className='change'>"You Need to Gain <span className='fw-bold'>{change.wght}</span> Kg"</div>)}
        {change.type === 'Normal' && (<div className='change'>"Your Weight is Normal, Good for You"</div>)}

      </div>
    </div>
  )
}

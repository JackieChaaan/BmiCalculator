import React from 'react';
import './BmiList.css'

export default function BmiList({ bmi, range }) {
  return (
    <div className='bmi-list text-center'>
      <ul className='list-group'>
        <li className='list-group-item'>
          <div className="row">
            <div className="col-4 fw-bold ">Type</div>
            <div className="col-4 fw-bold ">BMI</div>
            <div className="col-4 fw-bold ">Weight</div>
          </div>
        </li>
        <li className={bmi < 18.5 ? 'border border-primary border-2 fw-bold list-group-item' : 'list-group-item'}>
          <div className="row">
            <div className="col-4 ">Underweight</div>
            <div className="col-4 ">&lt; 18.5</div>
            <div className="col-4 ">&lt; {range.underweight.low} Kg</div>
          </div>
        </li>
        <li className={18.5 <= bmi && bmi <= 24.9 ? 'border border-success border-2 fw-bold list-group-item' : 'list-group-item'}>
          <div className="row">
            <div className="col-4 ">Normal</div>
            <div className="col-4 ">18.5 - 24.9</div>
            <div className="col-4 ">{range.normal.low} Kg - {range.normal.high} Kg</div>
          </div>
        </li>
        <li className={25 <= bmi && bmi <= 29.9 ? 'border border-warning border-2 fw-bold list-group-item' : 'list-group-item'}>
          <div className="row">
            <div className="col-4 ">Over Weight</div>
            <div className="col-4 ">25 - 29.9</div>
            <div className="col-4 ">{range.overweight.low} Kg - {range.overweight.high} Kg</div>
          </div>
        </li>
        <li className={30 <= bmi && bmi <= 34.9 ? 'border border-danger border-2 fw-bold list-group-item' : 'list-group-item'}>
          <div className="row">
            <div className="col-4 ">Obesity Class I</div>
            <div className="col-4 ">30 - 34.9</div>
            <div className="col-4 ">{range.obesityOne.low} Kg - {range.obesityOne.high} Kg</div>
          </div>
        </li>
        <li className={35 <= bmi && bmi <= 39.9 ? 'border border-danger border-2 fw-bold list-group-item' : 'list-group-item'}>
          <div className="row">
            <div className="col-4 ">Obesity Class II</div>
            <div className="col-4 ">35 - 39.9</div>
            <div className="col-4 ">{range.obesityTwo.low} Kg - {range.obesityTwo.high} Kg</div>
          </div>
        </li>
        <li className={bmi >= 40 ? 'border border-danger border-2 fw-bold list-group-item' : 'list-group-item'}>
          <div className="row">
            <div className="col-4 ">Obesity Class III</div>
            <div className="col-4 ">&gt; 40</div>
            <div className="col-4 ">&gt; {range.obesityThree.high} Kg</div>
          </div>
        </li>
      </ul>
    </div>
  )
}

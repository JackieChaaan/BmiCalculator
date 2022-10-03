
import React, { useState } from 'react';
import './BmiForm.css';

export default function BmiForm({ getData }) {
    const [Weight, setWeight] = useState("");
    const [Height, setHeight] = useState("");
    const [alert, setAlert] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if (isNaN(Weight) || isNaN(Height)) {
            setAlert(true);
            
        } else {
            getData(Weight, Height);
            setAlert(false);
            // setWeight("");
            // setHeight(""); 
        }
    }
    return (
        <div className='Bmi-From'>
            <form onSubmit={onSubmit}>
                <div className="form-head">
                    <h3>BMI Calculator</h3>
                </div>
                <div className="form-group">
                    <label htmlFor="Weight">Weight(kg) :</label><br />
                    <input type="text" placeholder='eg : 18' required onChange={(e) => { setWeight(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="Height">Height(m) :</label><br />
                    <input type="text" placeholder='eg : 1.80' required onChange={(e) => { setHeight(e.target.value) }} />
                </div>
                <div className="form-button">
                    <button type="submit">Get BMI</button>
                </div>
            </form>
            {alert ? <div className="alert alert-danger" role="alert">
                Invalid Input! Please Enter Valid Input
            </div> : ''}
        </div>
    )
}

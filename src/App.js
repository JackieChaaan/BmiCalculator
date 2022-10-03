
import './App.css';
import BmiForm from './Component/BmiForm';
import BmiList from './Component/BmiList';
import BmiType from './Component/BmiType';
import { Container } from 'react-bootstrap';
import { useState } from 'react';


function App() {
  const [bmi, setBmi] = useState("00");
  const [bmitype, setBmiType] = useState("Not Calculated");
  const [show, setShow] = useState(false)
  const [changeWeight, setChangeWeight] = useState({
    wght: "",
    type: ""
  });
  const [bmiRange, setBmiRange] = useState({
    underweight: { low: "" },
    normal: { low: "", high: "" },
    overweight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },
    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" }
  });

  // Function onFormSub
  const onFormSub = (w, h) => {
    let b = calcBmi(w, h);
    setBmi(b);
    setBmiType(weightType(b));
    const range = {
      underweight: { low: calWight(18.5, h) },
      normal: { low: calWight(18.5, h), high: calWight(24.9, h) },
      overweight: { low: calWight(25, h), high: calWight(29.9, h) },
      obesityOne: { low: calWight(30, h), high: calWight(34.9, h) },
      obesityTwo: { low: calWight(35, h), high: calWight(39.9, h) },
      obesityThree: { high: calWight(40, h) }
    }
    // set/update bmiRange state
    setBmiRange(range);

    // set/update changeWeight state
    setChangeWeight(weightchange(b, w, range));
    setShow(true);
  };

  //function calcwight
  const calWight = (bm, h) => (bm * h * h).toFixed(2);
  // Function calcBmi
  const calcBmi = (w, h) => (w / (h * h)).toFixed(2);

  // Function weightType
  const weightType = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (18.5 <= bmi && bmi <= 24.9) {
      return "Normal";
    }
    else if (25 <= bmi && bmi <= 29.9) {
      return "Over Weight";
    }
    else if (30 <= bmi && bmi <= 34.9) {
      return "Obesity Class I";
    }
    else if (35 <= bmi && bmi <= 39.9) {
      return "Obesity Class II";
    }
    else if (bmi >= 40) {
      return "Obesity Class III";
    }
  };

  // function weightchange
  const weightchange = (b, w, range) => {
    let changeobj;
    if (b > 24.9) {
      changeobj = {
        wght: (w - range.normal.high).toFixed(2),
        type: "Positive"
      };
      return changeobj;
    }
    if (b < 18.5) {
      changeobj = {
        wght: (range.normal.low - w).toFixed(2),
        type: "Negative"
      };
      return changeobj;
    }
    if (b >= 18.5 && b <= 24.9) {
      changeobj = {
        wght: 0,
        type: "Normal"
      };
      return changeobj;
    }
  }
  return (
    <div className="App">
      <Container>
        <div className="mainForm">
          <BmiForm getData={onFormSub} />
        </div>
        {show && (<div className="row">
          <div className="col-12 col-sm-12 col-md-6">

            <BmiType value={bmi} bmitype={bmitype} change={changeWeight} />

          </div>
          <div className="col-12 col-sm-12 col-md-6">

            <BmiList bmi={bmi} range={bmiRange} />

          </div>
        </div>)}

      </Container>
    </div>
  );
}

export default App;

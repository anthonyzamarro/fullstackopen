import React, {useState} from 'react';

const Statistics = (props) => (
  <div>
    {props.type} {props.num}

  </div>
)

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = (val, all) => {
    setGood(val + 1);
  }
  const handleClickNeutral = (val) => {
    setNeutral(val + 1);
  }
  const handleClickBad = (val) => {
    setBad(val + 1);
  }

  const all = neutral + good + bad;

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => handleClickGood(good)}>good</button>
      <button onClick={() => handleClickBad(bad)}>bad</button>
      <button onClick={() => handleClickNeutral(neutral)}>neutral</button>
      <Statistics  num={good} type="good"/>
      <Statistics  num={bad} type="neutral"/>
      <Statistics num={neutral} type="neutral"/>
      <br />
      <div>all {all}</div>
      <div>average {all / 3}</div>
      <div>positive { `${(good / all) * 100}%` }</div>
    </>
  );
}

export default App;

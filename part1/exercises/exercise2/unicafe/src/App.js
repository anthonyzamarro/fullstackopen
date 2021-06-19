import React, {useState} from 'react';

const Statistic = ({type, num}) => (
  <div>
    {type} {num}
  </div>
);

const Statistics = (props) => (
  <div>
    <Statistic type={props.type} num={props.num} />
  </div>
);

const Button = ({ onClick, type }) => {
  
  return (
    <button onClick={e => onClick()}>
      {type}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = (val) => {
    setGood(val + 1);
  }
  const handleClickNeutral = (val) => {
    setNeutral(val + 1);
  }
  const handleClickBad = (val) => {
    setBad(val + 1);
  }

  const all = neutral + good + bad;
  const positive = good / all;

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={() => handleClickGood(good)} type="good" />
      <Button onClick={() => handleClickBad(bad)} type="bad" />
      <Button onClick={() => handleClickNeutral(neutral)} type="neutral" />
      <h2>Statistics</h2>
      {!all ? <div>No feedback given</div> : 
      <>
        <Statistics num={good} type="good"/>
        <Statistics num={bad} type="neutral"/>
        <Statistics num={neutral} type="neutral"/>
        <Statistics num={all} type="all"/>
        <Statistics num={all / 3} type="average"/>
        <Statistics num={`${isNaN(positive) ? 0 : positive * 100}%`} type="positive"/>
      </>
      }
    </>
  );
}

export default App;

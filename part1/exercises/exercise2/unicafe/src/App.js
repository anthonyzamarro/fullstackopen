import React, {useState} from 'react';

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

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => handleClickGood(good)}>good</button>
      <button onClick={() => handleClickNeutral(neutral)}>neutral</button>
      <button onClick={() => handleClickBad(bad)}>bad</button>
      <br />
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
    </>
  );
}

export default App;

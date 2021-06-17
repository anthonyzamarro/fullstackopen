import React, {useState} from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleClickGood = (val, all) => {
    setGood(val + 1);
    setAll(all + 1);
  }
  const handleClickNeutral = (val) => {
    setNeutral(val + 1);
    setAll(all + 1);
  }
  const handleClickBad = (val) => {
    setBad(val + 1);
    setAll(all + 1);
  }

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => handleClickGood(good, all)}>good</button>
      <button onClick={() => handleClickNeutral(neutral, all)}>neutral</button>
      <button onClick={() => handleClickBad(bad, all)}>bad</button>
      <br />
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {all / 3}</div>
      <div>positive { `${(good / all) * 100}%` }</div>
    </>
  );
}

export default App;

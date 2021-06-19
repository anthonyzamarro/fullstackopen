import React, {useState} from 'react';

const Statistic = ({type, num}) => (
  <tr>
    <td>{type}</td> 
    <td>{num}</td>
  </tr>
);

const Statistics = (props) => (
  <>
    <Statistic type={props.type} num={props.num} />
  </>
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
      <table>
        <thead>
            <tr>
                <th colSpan="2">Statistics</th>
            </tr>
        </thead>
        <tbody>
        {!all ? <tr><td>No feedback given</td></tr> : 
            <>
              <Statistics num={good} type="good"/>
              <Statistics num={bad} type="neutral"/>
              <Statistics num={neutral} type="neutral"/>
              <Statistics num={all} type="all"/>
              <Statistics num={all / 3} type="average"/>
              <Statistics num={`${isNaN(positive) ? 0 : positive * 100}%`} type="positive"/>
            </>
            }
        </tbody>
    </table>
    </>
  );
}

export default App;

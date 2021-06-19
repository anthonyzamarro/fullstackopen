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


  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [anecdote, setAnecdote] = useState(0);

  const handleClickAnecdote = val => {
    console.log(val)
    setAnecdote(Math.floor(Math.random(val) * 10))
  }

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
      {anecdotes[anecdote] !== undefined ? anecdotes[anecdote] : anecdotes[0]}
      <br/>
      <Button onClick={() => handleClickAnecdote(anecdote)} type="anecdote" />
    </>
  );
}

export default App;

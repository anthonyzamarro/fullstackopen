import React from 'react';

const course = 'Half Stack application development';
const part1 = 'Fundamentals of React';
const exercises1 = 10;
const part2 = 'Useing props to pass data';
const exercises2 = 7;
const part3 = 'State of a component';
const exercises3 = 14;

const Header = () => (
	<>
      	<h1>{course}</h1>
	</>
)

const Content = (props) => (
	<>
      	<p>{props.content} {props.exercises}</p>
	</>
)

const Total = (props) => (
	<>
      	<p>Number of exercises {props.total} </p>
	</>
)

const App = () => {

  return (
    <div>
    <Header />
      <Content content={part1} exercises={exercises1}/>
      <Content content={part2} exercises={exercises2}/>
      <Content content={part3} exercises={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  );
}

export default App;

import React from 'react';

const App = () => {

	const course = 'Half Stack application development';
	const part1 = {
		name: 'Fundamentals of React',
		exercises: 10
	}
	const part2 = {
		name: 'Useing props to pass data',
		exercises: 10
	}
	const part3 = {
		name: 'State of a component',
		exercises: 34
	}

	const Header = (props) => (
		<>
		<h1>{props.title}</h1>
		</>
	)

	const Part = (props) => (
		<>
		<p>{props.content} {props.exercises}</p>
		</>
	)

	const Content = (props) => (
		<>
		<Part content={part1.name} exercises={part1.exercises}/>
		<Part content={part2.name} exercises={part2.exercises}/>
		<Part content={part3.name} exercises={part3.exercises}/>
		</>
	)

	const Total = (props) => (
		<>
		<p>Number of exercises {props.total} </p>
		</>
	)
  return (
    <div>
	    <Header title={course} />
	    <Content />
	    <Total total={part1.exercises + part2.exercises + part3.exercises } />
    </div>
  );
}

export default App;

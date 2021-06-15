import React from 'react';

const App = () => {

	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10
			},

			{
				name: 'Useing props to pass data',
				exercises: 7
			},

			{
				name: 'State of a component',
				exercises: 34
			}
		]
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
			<Part content={props.name} exercises={props.exercises}/>
		</>
	)

	const Total = (props) => (
		<>
			<p>Number of exercises {props.total} </p>
		</>
	)
  return (
    <div>
	    <Header title={course.name} />
	    {
	    	course.parts.map(part => <Content name={part.name} exercises={part.exercises} />)
	   }
	    <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises } />
    </div>
  );
}

export default App;

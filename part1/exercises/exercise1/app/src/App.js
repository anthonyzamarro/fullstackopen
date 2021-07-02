import React, { useState } from 'react';
import Course from './components/Course';

const App = () => {

	const course = [
		{
		  name: 'Half Stack application development',
		  id: 1,
		  parts: [
			{
			  name: 'Fundamentals of React',
			  exercises: 10,
			  id: 1
			},
			{
			  name: 'Using props to pass data',
			  exercises: 7,
			  id: 2
			},
			{
			  name: 'State of a component',
			  exercises: 14,
			  id: 3
			},
			{
			  name: 'Redux',
			  exercises: 11,
			  id: 4
			}
		  ]
		}, 
		{
		  name: 'Node.js',
		  id: 2,
		  parts: [
			{
			  name: 'Routing',
			  exercises: 3,
			  id: 1
			},
			{
			  name: 'Middlewares',
			  exercises: 7,
			  id: 2
			}
		  ]
		}
	  ]

	const Header = (props) => (
		<>
		<h1>{props.title}</h1>
		</>
	)

	const Part = (props) => (
		<>
			<h1>{props.content}</h1>
			{props.parts.map(part => {
				return <div key={part.id}>{part.name} {part.exercises}</div>
			})}
			<strong>Total {props.exercises}</strong>
		</>
	)

	const Content = (props) => {
		const parts = Object.values(props.exercises.parts);
		const total = parts.map(part => part.exercises);
		return (
			<>
				<Part content={props.name} exercises={total.reduce((a, b) => a + b)} 
				parts={parts}/>
			</>

		)
	}

	const Total = ({ total }) => {
		const parts = total.map(t => t.parts);
		const exercises = parts.map(part => part.map(p => p.exercises).reduce((a, b) => a + b));
		return (
			<>
				<p><strong>Number of exercises {exercises.reduce((a, b) => a + b)}</strong></p>
			</>
		)
	}

  return (
    <div>
		<Course>
	    <Header title="" />
	    {
	    	course.map(part => <Content key={part.id} name={part.name} exercises={part} />)
	   }
		<Total total={course} />
		</Course>
    </div>
  );
}

export default App;

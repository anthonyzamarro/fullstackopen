import React from 'react';
import Person from './Person';

const Persons = ({persons, filtered}) => {
    return (
        <>
         {persons.filter(person => person.name.toLowerCase().includes(filtered.toLowerCase())).map(person => <Person name={person.name} number={person.number}/>)}
        </>
    )
}

export default Persons;
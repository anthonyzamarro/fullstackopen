import React, { useState, useEffect} from 'react';
import Filter from './components/Filter';
import Form from './components/Form';
import Persons from './components/Persons';
import axios from 'axios';


function App2() {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filteredValue, setNewFilteredValue] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(res => {
                setPersons(res.data);
            })
    }, []);

    const handleNameChange = e => {
        setNewName(e.target.value);
    };

    const handleNumberChange = e => {
        setNewNumber(e.target.value);
    };

    const handleClick = e => {
        e.preventDefault();

        const names = Object.values(persons).map(person => person.name);
        if (names.includes(newName)) {
            alert(`${newName} is already added to phonebook`);
        } else {
            if (newNumber) {
                setPersons(persons.concat({ name: newName, number: newNumber }));
            } else {
                setPersons(persons.concat({ name: newName }));
            }
        }
    };

    const handleFilterChange = e => {
        setNewFilteredValue(e.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                <Filter value={persons.name} onChange={handleFilterChange} />
            </div>
            <Form 
                name={persons.name} 
                number={persons.number} 
                nameChange={handleNameChange}
                numberChange={handleNumberChange}
                click={handleClick}
            />
            <h2>Contacts</h2>
            <Persons persons={persons} filtered={filteredValue} />
        </div>
    );
}

export default App2
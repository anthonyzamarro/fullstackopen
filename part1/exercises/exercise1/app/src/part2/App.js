import React, { useState, useEffect } from 'react'

const App2 = () => {
  let [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filteredValue, setNewFilteredValue ] = useState('');

    const handleNameChange = e => {
        setNewName(e.target.value);
    }

    const handleNumberChange = e => {
        setNewNumber(e.target.value);
    }

    const handleClick = e => {
        e.preventDefault();

        const names = Object.values(persons).map(person => person.name);
        if (names.includes(newName)) {
            alert(`${newName} is already added to phonebook`); 
        } else {
            if (newNumber) {
                setPersons(persons.concat({name: newName, number: newNumber}));
            } else {
                setPersons(persons.concat({name: newName})); 
            }
        }     
    }

    const handleFilterChange = e => {
        setNewFilteredValue(e.target.value);
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
          <div>
            Filter shown with <input value={persons.name} onChange={handleFilterChange} />
          </div>
          <br />
            <h2><strong>add new</strong></h2>
        <div>
          name: <input value={persons.name} onChange={handleNameChange} />
        </div>
        <br />
        <div>number: <input value={persons.number} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit" onClick={handleClick}>add</button>
        </div>
      </form>
      <h2>Contacts</h2>
        {persons.filter(person => person.name.toLowerCase().includes(filteredValue.toLowerCase())).map(person => <div key={person.name}>Name: {person.name} {person.number}</div>)}
    </div>
  )
}

export default App2
import React, { useState } from 'react'

const App2 = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '555-555-5555'
    }
  ]) 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

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
  console.log(newNumber)
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={persons.name} onChange={handleNameChange} />
        </div>
        <br />
        <div>number: <input value={persons.number} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit" onClick={handleClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => <div key={person.name}>Name: {person.name} <br/>Number: {person.number}</div>)}
      {/* <div>debug: {newName}</div> */}
    </div>
  )
}

export default App2
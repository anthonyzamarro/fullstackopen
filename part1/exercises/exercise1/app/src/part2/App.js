import React, { useState } from 'react'

const App2 = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('');

  const handleNameChange = e => {
      setNewName(e.target.value);
    }
    
    const handleClick = e => {
      e.preventDefault();
    
      persons.forEach(person => {
          if (person.name !== newName) {
            setPersons(persons.concat({name: newName}));
        } else {
            return alert(`${newName} has already been added!`);
          }
      });

      console.log(persons);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={persons.name} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit" onClick={handleClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => <div key={person.name}>{person.name}</div>)}
      {/* <div>debug: {newName}</div> */}
    </div>
  )
}

export default App2
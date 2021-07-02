import React from 'react';

const Person = ({name, number}) => {
    return (
        <div key={name}>Name: {name} {number}</div>
    )
}

export default Person;
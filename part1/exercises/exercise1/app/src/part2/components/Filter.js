import React from 'react';

const Filter = ({value, onChange}) => (
    <>
        Filter shown with <input value={value} onChange={onChange}/>
    </>
);

export default Filter;
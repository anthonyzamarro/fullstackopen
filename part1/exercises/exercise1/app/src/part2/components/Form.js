import React from 'react';

const Form = ({name, number, nameChange, numberChange, click}) => (
    <>
        <form>
            <br />
            <h2><strong>add new</strong></h2>
            <div>
                name: <input value={name} onChange={nameChange} />
            </div>
            <br />
            <div>number: <input value={number} onChange={numberChange} /></div>
            <div>
                <button type="submit" onClick={click}>add</button>
            </div>
        </form>
    </>
)

export default Form;
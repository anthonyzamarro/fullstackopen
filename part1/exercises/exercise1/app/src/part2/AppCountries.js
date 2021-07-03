import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AppCountries = () => {
    const [countries, setCountries] = useState([]);
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    useEffect(() => {
        // console.log(input);
        axios
            .get(`https://restcountries.eu/rest/v2/name/${input}`)
            .then(res => {
                setCountries(res.data);
            });
        });

    return (
        <>
            <h1>Choose Country</h1>
            <div>find countries <input type="text" value={input} onChange={handleChange} /></div>
            { 
            // countries.length > 10 ? 
            //     'Too many matches, specify another filter' :
            //     countries.map(country => <div key={country.name}>{country.name}</div>) 
            //     || 
                countries.length === 1 ?
                countries.map(country => {
                            <div>
                                <h1>{country.name}</h1>
                                <div>{country.capital}</div>
                                <div>{country.population}</div>
                                <ul>
                                    {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
                                </ul>
                                <img src={country.flag} alt={`flag of ${country.name}`} />
                            </div>
                }) :
                countries.map(country => <div key={country.name}>{country.name}</div>)
            }

            {/* {countries.filter(country => {
                if (input !== '') {
                    if (input === country.name.toLowerCase()) {
                        console.log(country);
                        return (
                            <div>
                                <h1>{country.name}</h1>
                                <div>{country.capital}</div>
                                <div>{country.population}</div>
                                <ul>
                                    {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
                                </ul>
                                <img src={country.flag} alt={`flag of ${country.name}`} />
                            </div>
                        )
                    }
                    return country.name.toLowerCase().includes(input.toLowerCase());
                }
                return country.name;
            })
            
            .map((country, index, array) => {
                if (array.length > 10) {
                    return 'Too many matches, specify another filter';
                } else if (array.length <= 10) {
                    return <div key={country.name}>{country.name}</div>
                }
            })} */}
        </>
    )
}

export default AppCountries;
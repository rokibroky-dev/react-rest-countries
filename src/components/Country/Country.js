/* eslint-disable jsx-a11y/alt-text */
// import './App.css';
import React from 'react';
import Countries from '../Countries/Countries';
import './Country.css'

const Country = (props) => {
  const {name, region, population, area, capital, flags} = props.country;
    return (
        <div className='country'>
            
            <h2> {name.common}</h2>
            <img src={flags.png} alt="" />
            <h3>Capital: {props.country.capital}</h3>
            <h4>Region: <a className='region' href="">{region}</a></h4>
            <p>Population: {props.country.population}</p>
            <p><small>Area: {props.country.area}</small></p>
        </div>
    );
};

export default Country;
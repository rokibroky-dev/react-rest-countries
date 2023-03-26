
import logo from './logo.svg';
import './App.css'
// import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
     <Header></Header>
      <Countries></Countries>
    </div>
  );
}






export default App;


/*

<LoadCountries></LoadCountries> 

function LoadCountries(){
  const [countries, setCountries] = useState([]);
  

  useEffect( () =>{

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, []) 

  return (
    <div>
      <h1>Visiting every country in the world</h1>
      <h3>Total Countries: {countries.length}</h3>
      <h4 className="h4">Welcome to our communuty</h4>
    {
      countries.map(country => <Country name={country.name.common} population={country.population} flags = {country.flags}></Country> )
    }
    </div>
  )
}

  function Country(props){
    return (
      <div>
        <h2>Name: {props.name}</h2>
        <img src="{props.flags}" alt="" />
        <h4>Population: {props.population}</h4>
      </div>
    )
  }
*/



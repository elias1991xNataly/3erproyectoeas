import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import NavBar from './components/Navbar/Navbar';
import countries from "./countries-data.json";
import { useState } from 'react';
import CountryDetails from "./components/CountryDetails";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import react from "react";



function App() {
  const urlOfCountries = "https://ih-countries-api.herokuapp.com/countries";

  const [countries, setCountries] = useState();
  return (
    <div className="App">
      <NavBar />
      <div classname="container">
        <div className='row'>

          <CountriesList countries={countries} />
        </div>

      </div>
    </div>
  );
}

export default App;

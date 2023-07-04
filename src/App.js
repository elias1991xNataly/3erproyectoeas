import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import NavBar from './components/Navbar/Navbar';
import countries from "./countries-data.json";
import { useState } from 'react';
import CountryDetails from "./components/CountryDetails";
import react from "react";
import { Route, Routes } from 'react-router-dom';



function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className='row'>

          <CountriesList countriesData={countries} />
        </div>
        <Routes>
          <Route path='/:id' element={<CountryDetails countriesData={countries} otraCosa="otra cosa" algo="countriesList"/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

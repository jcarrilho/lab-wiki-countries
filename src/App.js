import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import CountriesList from './Components/CountriesList.jsx';
import CountryDetails from './Components/CountryDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:alpha3Code" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
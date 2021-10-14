import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import CountryCard from '../components/Card';
import TotalCard from '../components/TotalCard';
import { filterCountry } from '../redux/countries/countries';
import Filter from '../components/Filter';
import africa from '../assets/africa.svg';

const Home = () => {
  const countries = useSelector((state) => state.countriesReducer.continent);
  const dispatch = useDispatch();

  let total = 0;
  if (countries) {
    countries.forEach((element) => {
      total += element.All.confirmed;
    });
  }

  const handleFilter = (value) => {
    dispatch(filterCountry(value));
  };

  return (
    <div>
      <Navbar title="All Africa cases" left="2021" />
      <div>
        <div className="d-flex align-items-center justify-content-evenly px-2 py-3 main-card">
          <img src={africa} alt="map of africa" className="map w-25 h-25" />
          <TotalCard name="AFRICA" total={total} className="fs-2" />
        </div>
        <div className="d-flex align-items-center justify-content-around filter">
          <p>STATS BY COUNTRY</p>
          <Filter handleFilter={handleFilter} />
        </div>
        <div className="d-flex flex-wrap">
          {countries && countries.map((country) => (
            <CountryCard key={country.All.country} country={country} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

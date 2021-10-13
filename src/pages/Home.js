/* eslint-disable dot-notation */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import CountryCard from '../components/Card';
import TotalCard from '../components/TotalCard';
import { filterCountry } from '../redux/countries/countries';
import Filter from '../components/Filter';

const Home = () => {
  const countries = useSelector((state) => state.countriesReducer);
  const dispatch = useDispatch();

  let total = 0;
  if (countries) {
    countries.forEach((element) => {
      total += element['All'].confirmed;
    });
  }

  const handleFilter = (value) => {
    dispatch(filterCountry(value));
  };

  return (
    <div>
      <Navbar title="All Africa cases" left="2021" />
      <div className="p-2">
        <div>
          <TotalCard name="Africa Total confirmed:" total={total} />
        </div>
        <div>
          <Filter handleFilter={handleFilter} />
        </div>
        <div className="d-flex flex-wrap">
          {countries.map((country) => (
            <CountryCard key={country['All'].country} country={country} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

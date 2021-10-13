import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from './Navbar';
import TotalCard from './TotalCard';
import { loadCountry } from '../redux/countries/countries';

const Details = () => {
  const country = useSelector((state) => state.countriesReducer);
  const { name } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCountry(name));
  }, []);

  return (
    <div>
      <Navbar title="Country cases" left={<FaLessThan />} />
      <TotalCard name={country.country} total={country.confirmed} />
      <ListGroup as="ul">
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
          <h3>Recovered</h3>
          <p>{country.recovered}</p>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
          <h3>Deaths</h3>
          <p>{country.deaths}</p>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
          <h3>Population</h3>
          <p>{country.population}</p>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
          <h3>Location</h3>
          <p>{country.location}</p>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
          <h3>Capital city</h3>
          <p>{country.capital_city}</p>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
          <h3>Last updated</h3>
          <p>{country.updated}</p>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Details;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from '../components/Navbar';
import TotalCard from '../components/TotalCard';
import { loadCountry } from '../redux/countries/countries';
import covid from '../assets/covid.svg';

const Details = () => {
  const country = useSelector((state) => state.countriesReducer.current_country);
  const { name } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCountry(name));
  }, [dispatch]);

  return (
    <div>
      {country && (
        <div>
          <Navbar title={country.country} left={<FaLessThan />} />
          <div className="d-flex align-items-center justify-content-evenly px-2 py-3 main-card">
            <img src={covid} alt="covid virus" className="map w-25 h-25" />
            <TotalCard name={country.country} total={country.confirmed} />
          </div>
          <div className="d-flex align-items-center justify-content-around filter">
            <p>COUNTRY BREAKDOWN</p>
          </div>
          <ListGroup as="ul" className="text-light">
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
              <h4>Recovered</h4>
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
      )}
    </div>
  );
};

export default Details;

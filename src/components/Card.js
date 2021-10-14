import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { FiArrowRightCircle } from 'react-icons/fi';
import covid from '../assets/covid.svg';

const CountryCard = ({ country }) => {
  const page = `/details/${country.All.country}`;

  return (
    <Card key={country.All.country} className="card border-0 p-2 country-card">
      <Card.Link href={page}>
        <div className="d-flex justify-content-between ps-3">
          <img src={covid} alt="covid virus" className="map w-50 h-50" />
          <FiArrowRightCircle />
        </div>
        <div className="text-end">
          <Card.Title>{country.All.country}</Card.Title>
          <Card.Body>
            <Card.Text>
              {country.All.confirmed.toLocaleString()}
            </Card.Text>
          </Card.Body>
        </div>
      </Card.Link>
    </Card>
  );
};

CountryCard.propTypes = {
  country: PropTypes.shape({
    All: PropTypes.shape({
      country: PropTypes.string,
      confirmed: PropTypes.number,
    }),
  }).isRequired,
};

export default CountryCard;

/* eslint-disable dot-notation */
/* eslint-disable react/prop-types */
import React from 'react';
import Card from 'react-bootstrap/Card';
import { FiArrowRightCircle } from 'react-icons/fi';
import covid from '../assets/covid.svg';

const CountryCard = ({ country }) => {
  const page = `/details/${country['All'].country}`;

  return (
    <Card key={country['All'].country} className="card border-0 p-2">
      <Card.Link href={page}>
        <div className="d-flex justify-content-between ps-3">
          <img src={covid} alt="covid virus" className="map w-50 h-50" />
          <FiArrowRightCircle />
        </div>
        <div className="text-end">
          <Card.Title>{country['All'].country}</Card.Title>
          <Card.Body>
            <Card.Text>
              {country['All'].confirmed}
            </Card.Text>
          </Card.Body>
        </div>
      </Card.Link>
    </Card>
  );
};

export default CountryCard;

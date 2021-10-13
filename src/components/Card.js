/* eslint-disable dot-notation */
/* eslint-disable react/prop-types */
import React from 'react';
import Card from 'react-bootstrap/Card';
import { FiArrowRightCircle } from 'react-icons/fi';

const CountryCard = ({ country }) => {
  const page = `/details/${country['All'].country}`;

  return (
    <Card key={country['All'].country} className="card">
      <Card.Link href={page}>
        <FiArrowRightCircle />
        <Card.Title>{country['All'].country}</Card.Title>
        <Card.Body>
          <Card.Text>
            {country['All'].confirmed}
          </Card.Text>
        </Card.Body>
      </Card.Link>
    </Card>
  );
};

export default CountryCard;

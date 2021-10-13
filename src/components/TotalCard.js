/* eslint-disable react/prop-types */
import React from 'react';
import Card from 'react-bootstrap/Card';

const TotalCard = (prop) => {
  const { name, total } = prop;

  return (
    <Card>
      <Card.Title>{name}</Card.Title>
      <Card.Body>
        <Card.Text>
          <p>{total}</p>
          <h4>Confirmed Cases</h4>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TotalCard;

import React from 'react';
import Card from 'react-bootstrap/Card';

const TotalCard = (prop) => {
  const { name, total } = prop;

  return (
    <Card className="border-0">
      <Card.Title>{name}</Card.Title>
      <Card.Body>
        <Card.Text className="d-flex flex-column">
          <span>{total.toLocaleString()}</span>
          Confirmed Cases
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TotalCard;

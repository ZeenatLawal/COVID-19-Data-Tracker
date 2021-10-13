/* eslint-disable dot-notation */
import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';

const TotalCases = () => {
  const countries = useSelector((state) => state.countriesReducer);
  let total = 0;
  countries.forEach((element) => {
    total += element['All'].confirmed;
  });

  return (
    <Card>
      <Card.Title>Africa Total confirmed:</Card.Title>
      <Card.Body>
        <Card.Text>
          {total}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TotalCases;

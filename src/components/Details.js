import React from 'react';
import { FaLessThan } from 'react-icons/fa';
import Navbar from './Navbar';

const Details = () => (
  <div>
    <Navbar title="Country" left={<FaLessThan />} />
    <h1>Details</h1>
  </div>
);

export default Details;

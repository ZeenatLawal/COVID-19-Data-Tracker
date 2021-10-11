/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { MdMic, MdSettings } from 'react-icons/md';

const Navbar = (props) => (
  <div className="d-flex justify-content-between align-items-center navbar">
    <p>{props.left}</p>
    <p>{props.title}</p>
    <div className="fs-4">
      <MdMic className="me-3" />
      <MdSettings />
    </div>
  </div>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
};

export default Navbar;

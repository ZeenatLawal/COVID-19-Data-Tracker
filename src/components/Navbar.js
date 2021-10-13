/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { MdMic, MdSettings } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  if (props.title === 'Country cases') {
    return (
      <div className="d-flex justify-content-between align-items-center navbar">
        <NavLink to="/" exact>{props.left}</NavLink>
        <p>{props.title}</p>
        <div className="fs-4">
          <MdMic className="me-3" />
          <MdSettings />
        </div>
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-between align-items-center navbar">
      <p>{props.left}</p>
      <p>{props.title}</p>
      <div className="fs-4">
        <MdMic className="me-3" />
        <MdSettings />
      </div>
    </div>
  );
};

export default Navbar;

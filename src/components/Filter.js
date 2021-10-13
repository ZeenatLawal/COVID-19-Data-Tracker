import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';

const Filter = ({ handleFilter }) => (
  <Dropdown onSelect={handleFilter}>
    <Dropdown.Toggle className="dropdown">
      Filter
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item eventKey="all">All</Dropdown.Item>
      <Dropdown.Item eventKey="99999">&#60;100000</Dropdown.Item>
      <Dropdown.Item eventKey="100000">100000+</Dropdown.Item>
      <Dropdown.Item eventKey="200000">200000+</Dropdown.Item>
      <Dropdown.Item eventKey="300000">300000+</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;

import { getContinent, getCountry } from './Api';

const LOAD_CONTINENT = 'covid-19-data-tracker/details/LOAD_CONTINENT';
const LOAD_COUNTRY = 'covid-19-data-tracker/details/LOAD_COUNTRY';
const FILTER_DATA = 'covid-19-data-tracker/details/FILTER_DATA';

const initialState = [];

export const loadContinent = () => async (dispatch) => {
  const continent = await getContinent();
  const countries = Object.values(continent);

  if (countries) {
    dispatch({
      type: LOAD_CONTINENT,
      payload: countries,
    });
  }
};

export const loadCountry = (name) => async (dispatch) => {
  const countryData = await getCountry(name);
  const country = Object.values(countryData)[0];

  if (country) {
    dispatch({
      type: LOAD_COUNTRY,
      payload: country,
    });
  }
};

const filterNumbers = (countries, value) => {
  switch (value) {
    case '99999':
      return countries.filter((country) => country.All.confirmed < 100000);
    case '100000':
      return countries.filter((country) => country.All.confirmed >= 100000
        && country.All.confirmed < 200000);
    case '200000':
      return countries.filter((country) => country.All.confirmed >= 200000
        && country.All.confirmed < 300000);
    case '300000':
      return countries.filter((country) => country.All.confirmed >= 300000);
    default:
      return countries;
  }
};

export const filterCountry = (value) => async (dispatch) => {
  const continent = await getContinent();
  const countries = Object.values(continent);
  const filteredCountry = filterNumbers(countries, value);

  if (filteredCountry) {
    dispatch({
      type: FILTER_DATA,
      payload: filteredCountry,
    });
  }
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONTINENT:
      return { continent: action.payload };
    case LOAD_COUNTRY:
      return {
        ...state,
        current_country: action.payload,
      };
    case FILTER_DATA:
      return { continent: action.payload };
    default:
      return state;
  }
};

export default countriesReducer;

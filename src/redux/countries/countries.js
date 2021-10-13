import { getContinent, getCountry } from './Api';

const LOAD_CONTINENT = 'covid-19-data-tracker/details/LOAD_CONTINENT';
const LOAD_COUNTRY = 'covid-19-data-tracker/details/LOAD_COUNTRY';

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

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONTINENT:
      return action.payload;
    case LOAD_COUNTRY:
      return { ...action.payload };
    default:
      return state;
  }
};

export default countriesReducer;

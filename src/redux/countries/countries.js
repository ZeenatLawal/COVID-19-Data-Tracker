import { getContinent } from './Api';

const LOAD_CONTINENT = 'covid-19-data-tracker/details/LOAD_CONTINENT';

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

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CONTINENT:
      return action.payload;
    default:
      return state;
  }
};

export default countriesReducer;

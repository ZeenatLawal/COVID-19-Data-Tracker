import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/Home';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => ([
    {
      All: {
        confirmed: '204900',
        recovered: '0',
        deaths: '5862',
        country: 'Algeria',
      },
    },
    {
      All: {
        confirmed: '2222',
        recovered: '0',
        deaths: '5862',
        country: 'Morocco',
      },
    },
  ]),
  useDispatch: () => mockDispatch,
}));

jest.mock('../redux/countries/countries', () => ({
  loadContinent: () => ([
    {
      All: {
        confirmed: '204900',
        recovered: '0',
        deaths: '5862',
        country: 'Algeria',
      },
    },
    {
      All: {
        confirmed: '2222',
        recovered: '0',
        deaths: '5862',
        country: 'Morocco',
      },
    },
  ]),
}));

describe('Home page', () => {
  test('Snapshot test', () => {
    const home = renderer.create(
      <Home />,
    )
      .toJSON();
    expect(home).toMatchSnapshot();
  });

  test('UI test', () => {
    render(<Home />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('Fire filter event', () => {
    render(<Home />);
    fireEvent.select(screen.getByRole('button'), {
      target: { eventKey: '99999' },
    });
    expect(screen.getByText(/Morocco/)).toBeInTheDocument();
  });
});

import renderer from 'react-test-renderer';
import CountryCard from '../components/Card';

describe('Filter component', () => {
  test('Snapshot test', () => {
    const totalCard = renderer.create(
      <CountryCard country={{ All: { country: 'Nigeria', confirmed: '1264' } }} />,
    )
      .toJSON();
    expect(totalCard).toMatchSnapshot();
  });
});

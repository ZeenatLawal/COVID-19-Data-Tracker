import renderer from 'react-test-renderer';
import TotalCard from '../components/TotalCard';

describe('Filter component', () => {
  test('Snapshot test', () => {
    const totalCard = renderer.create(
      <TotalCard name="AFRICA" total="200987" />,
    )
      .toJSON();
    expect(totalCard).toMatchSnapshot();
  });
});

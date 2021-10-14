import renderer from 'react-test-renderer';
import Filter from '../components/Filter';

describe('Filter component', () => {
  test('Snapshot test', () => {
    const filter = renderer.create(
      <Filter handleFilter={() => {}} />,
    )
      .toJSON();
    expect(filter).toMatchSnapshot();
  });
});

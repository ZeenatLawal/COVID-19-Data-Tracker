import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';

describe('App component', () => {
  test('Snapshot test', () => {
    const app = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});

import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import Details from './components/Details';
import { loadContinent } from './redux/countries/countries';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContinent());
  }, [dispatch]);

  return (
    <div className="App text-light">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details/:name">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

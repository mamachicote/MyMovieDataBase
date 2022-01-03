// @packages
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// @app
import Search from './components/Search';
import MovieDetail from './components/MovieDetail';

// @own
import './App.css';

function App() {
  return (
    <div className="Main-Page">
      <Router>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/movie/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

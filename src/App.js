import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import NewsList from './Components/NewsList';
import Search from './Components/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>

      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={NewsList} />
          <Route exact path='/search' component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

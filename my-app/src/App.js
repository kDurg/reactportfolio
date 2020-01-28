import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Notfound from './Pages/Notfound';
import Components, { Navbar } from "./Components/AllComponents";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={Container}>
          <div className={Row}>
            <header className="App-header">
              <Navbar />
            </header>
          </div>

          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/resume" component={Resume} />
              <Route component = {Notfound} />
            </Switch>
          </Router>

        </div>
      </div>
    );
  }
}

export default App;

import React, { Fragment } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Footer from './components/Footer';
import Services from './components/Services';
import Team from './components/Team';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/team" component={Team} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>

  );
}

export default App;

import React, { Fragment } from 'react';

import { BrowserRouter as Router, Link, Switch } from 'react-router-dom'

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
          <Link exact path="/" component={Landing} />
          <Link exact path="/about" component={About} />
          <Link exact path="/services" component={Services} />
          <Link exact path="/team" component={Team} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>

  );
}

export default App;

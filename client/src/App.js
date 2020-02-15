import React, { Fragment } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Footer from './components/Footer';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Careers from './components/Careers';
import Service from './components/Service';
import TeamContextProvider from './contexts/TeamContext';
import ServiceContextProvider from './contexts/ServiceContext';
import Clients from './components/Clients';

function App() {
  return (
    <ServiceContextProvider>
      <TeamContextProvider>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/service/:service" component={Service} />
              <Route exact path="/team" component={Team} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/clients" component={Clients} />
              <Route exact path="/careers" component={Careers} />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </TeamContextProvider>
    </ServiceContextProvider>
  );
}

export default App;

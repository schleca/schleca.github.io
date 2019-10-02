import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Experiments from './pages/Experiments';

const Portfolio = () => {
  return (
    <Router>
      <ScrollToTop>
        <Route
          render={({ location }) => (
            <Fragment>
              <Header />         
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={600}
                >
                  <Switch location={location}>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/projects/:project" exact component={Project} />
                    <Route path="/experiments" exact component={Experiments} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <Footer />
            </Fragment>
          )}
        />
      </ScrollToTop>
    </Router>
  );
}

export default Portfolio;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Header from './components/Header';
import Footer from './components/Footer';
// pages
import Home from './pages/Home';
import Anime from './pages/Anime';
import Animes from './pages/Animes';
import Contact from './pages/Contact';
import Episodes from './pages/Episodes';
import Watch from './pages/Watch';

// CSS
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/anime/:id/episodes" component={Episodes} />
          <Route path="/anime/:id/watch" component={Watch} />
          <Route path="/anime/:id" component={Anime} />
          <Route path="/animes" exact component={Animes} />
          <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />

    </Router>
    
    
    // <>
    // <Header />
    // <Home />
    // <Footer />
    // </>
  );
}

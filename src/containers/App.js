import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import RandomQuoteGenerator from './RandomQuoteGenerator';
import LinksPage from '../components/LinksPage';
import AboutPage from '../components/AboutPage';
import Header from '../components/Header';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/links" component={LinksPage} />
          <Route exact path='/quotegenerator' component={RandomQuoteGenerator} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
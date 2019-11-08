import React, {Component} from 'react';

import Hero from './components/Hero';
import Compare from './components/Compare';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

import './layout/config/_base.sass';

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Compare />
        <HowItWorks />
        <Footer />
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';

import Hero from './components/Hero';
import Compare from './components/Compare';
import HowItWorks from './components/HowItWorks';

import './layout/config/_base.sass';

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Compare />
        <HowItWorks />
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';

import Hero from './components/Hero';
import Compare from './components/Compare';

import './layout/config/_base.sass';

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Compare />
      </div>
    );
  }
}

export default App;

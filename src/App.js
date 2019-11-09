import React, {Component} from 'react';

import Hero from './components/Hero';
import Compare from './components/Compare';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

import './layout/config/_base.sass';

class App extends Component {
  componentDidMount = () => {
    this.triggerAnimation();
  }

  // Trigger an animation when the element is in the viewport
  triggerAnimation = () => {
    const compareHeading = document.querySelector('.compare__heading');
    const compareInfo = document.querySelector('.compare__info');
    const compareBoxes = document.querySelectorAll('.compare-box');
    const howitworksHeading = document.querySelector('.how-it-works__heading');
    const howitworksInfo = document.querySelector('.how-it-works__info');
    const howitworksSections = document.querySelectorAll('.how-it-works__section');
    const footerHeader = document.querySelector('.footer__header');
    const footerForm = document.querySelector('.footer__form');
    
    const elements = [
      compareHeading,
      compareInfo,
      compareBoxes[0],
      compareBoxes[1],
      howitworksHeading,
      howitworksInfo,
      howitworksSections[0],
      howitworksSections[1],
      howitworksSections[2],
      howitworksSections[3],
      footerHeader,
      footerForm
    ];

    window.onscroll = () => {
      elements.forEach((element) => {
        if(window.scrollY + (window.innerHeight / 4) * 3 > element.offsetTop) {
          element.classList.add('fadeup');
        }
      });
    }
  }

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

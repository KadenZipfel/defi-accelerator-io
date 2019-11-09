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

  triggerAnimation = () => {
    const compareHeading = document.querySelector('.compare__heading');
    const compareInfo = document.querySelector('.compare__info');
    const compareBoxes = document.querySelectorAll('.compare-box');
    const howitworksHeading = document.querySelector('.how-it-works__heading');
    const howitworksInfo = document.querySelector('.how-it-works__info');
    const howitworksSections = document.querySelectorAll('.how-it-works__section');
    const compareBoxProps = document.querySelectorAll('.compare-box__prop');
    const compareBoxValues = document.querySelectorAll('.compare-box__value');
    
    const fadeUpElements = [
      compareHeading,
      compareInfo,
      compareBoxes[0],
      compareBoxes[1],
      howitworksHeading,
      howitworksInfo,
      howitworksSections[0],
      howitworksSections[1],
      howitworksSections[2],
      howitworksSections[3]
    ];

    const fadeInElements = [
      compareBoxProps[0],
      compareBoxProps[1],
      compareBoxProps[2],
      compareBoxProps[3],
      compareBoxProps[4],
      compareBoxProps[5],
      compareBoxProps[6],
      compareBoxProps[7],
      compareBoxProps[8],
      compareBoxProps[9],
      compareBoxProps[10],
      compareBoxProps[11],
      compareBoxValues[0],
      compareBoxValues[1],
      compareBoxValues[2],
      compareBoxValues[3],
      compareBoxValues[4],
      compareBoxValues[5],
      compareBoxValues[6],
      compareBoxValues[7],
      compareBoxValues[8],
      compareBoxValues[9],
      compareBoxValues[10],
      compareBoxValues[11],
    ];

    window.onscroll = () => {
      fadeUpElements.forEach((element) => {
        if(window.scrollY + (window.innerHeight / 4) * 3 > element.offsetTop) {
          element.classList.add('fadeup');
        }
      });

      fadeInElements.forEach((element) => {
        if(window.scrollY + (window.innerHeight / 4) * 3 > element.offsetTop) {
          element.classList.add('fadein');
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

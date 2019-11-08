import React, {Component} from 'react';

import '../layout/components/how-it-works.sass';

import arbitrageGold from '../images/arbitrage-gold.png'
import daiGold from '../images/dai-gold.png'
import daisGold from '../images/dais-gold.png'
import lifesaverGold from '../images/lifesaver-gold.png'

class HowItWorks extends Component {
  render() {
    return (
      <section className="how-it-works">
        <div className="how-it-works__header">
          <h2 className="how-it-works__heading">
            How It Works
          </h2>
          <p className="how-it-works__info">
            It's actually quite simple.
          </p>
        </div>
        <div className="how-it-works__sections">
          <div className="how-it-works__section">
            <img className="how-it-works__img" src={daiGold} alt="Dai" />
            <p className="how-it-works__text">
              Deposit dai in the smart contract
            </p>
          </div>
          <div className="how-it-works__section">
            <img className="how-it-works__img" src={arbitrageGold} alt="Arbitrage" />
            <p className="how-it-works__text">
              The smart contract leverages arbitrage opportunities on compound
            </p>
          </div>
          <div className="how-it-works__section">
            <img className="how-it-works__img" src={lifesaverGold} alt="Lifesaver" />
            <p className="how-it-works__text">
              Risk is automatically managed so you don't have to worry
            </p>
          </div>
          <div className="how-it-works__section">
            <img className="how-it-works__img" src={daisGold} alt="Dais" />
            <p className="how-it-works__text">
              You can withdraw any amount any time
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default HowItWorks;
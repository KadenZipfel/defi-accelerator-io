import React, {Component} from 'react';

import '../layout/components/hero.sass';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <h1 className="hero__header">
          DEFI ACCELERATOR
        </h1>
        <hr className="hero__hr" />
        <p className="hero__info">
          Earn up to 2x interest rate on compound by taking advantage of arbitrage 
          opportunities whilst automatically managing risk.
        </p>
        <div className="hero__buttons">
          <button className="hero__button">
            Deposit
          </button>
          <button className="hero__button">
            Withdrawal
          </button>
        </div>
      </section>
    );
  }
}

export default Hero;
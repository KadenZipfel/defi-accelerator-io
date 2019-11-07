import React, {Component} from 'react';

class Hero extends Component {
  render() {
    return (
      <section class="hero">
        <h1 class="hero__header">
          DEFI ACCELERATOR
        </h1>
        <hr class="hero__hr" />
        <p class="hero__info">
          Earn up to 2x interest rate on compound by taking advantage of arbitrage 
          opportunities whilst automatically managing risk.
        </p>
        <button class="hero__button">
          Deposit
        </button>
        <button class="hero__button">
          Withdrawal
        </button>
      </section>
    );
  }
}

export default Hero;
import React, {Component} from 'react';

import CompareBox from './CompareBox';

import '../layout/components/compare.sass'

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '1,000,000',
      defiAcceleratorInterestRateMantissa: 0.13467,
      compoundInterestRateMantissa: 0.0633,
      defiAcceleratorValues: null,
      compoundValues: null
    }
  }

  render() {
    const defiAcceleratorValues = [
      {'Interest Rate:': `%${this.state.defiAcceleratorInterestRate}`},
      {'Balance:': `${this.state.amount}`},
      {'Yearly Interest:': `${this.state.amount * this.state.defiAcceleratorInterestRateMantissa}`},
      {'Monthly Interest:': `${(this.state.amount * this.state.defiAcceleratorInterestRateMantissa) / 12}`},
      {'Weekly Interest:': `${(this.state.amount * this.state.defiAcceleratorInterestRateMantissa) / 52}`},
      {'Daily Interest:': `${(this.state.amount * this.state.defiAcceleratorInterestRateMantissa) / 365}`}
    ]

    const compoundValues = [
      {'Interest Rate:': `%${this.state.compoundInterestRateMantissa}`},
      {'Balance:': `${this.state.amount}`},
      {'Yearly Interest:': `${this.state.amount * this.state.compoundInterestRateMantissaMantissa}`},
      {'Monthly Interest:': `${(this.state.amount * this.state.compoundInterestRateMantissaMantissa) / 12}`},
      {'Weekly Interest:': `${(this.state.amount * this.state.compoundInterestRateMantissaMantissa) / 52}`},
      {'Daily Interest:': `${(this.state.amount * this.state.compoundInterestRateMantissaMantissa) / 365}`}
    ]

    return (
      <section className="compare">
        <div className="compare__header">
          <h2 className="compare__heading">
            See How Much ${this.state.amount} Can Make You
          </h2>
          <p className="compare__info">
            Make the most of DeFi by maximizing your earnings.
          </p>
        </div>
        <div className="compare__boxes">
          <CompareBox header="Defi Accelerator" defiAcceleratorValues />
          <CompareBox header="Compound" compoundValues />
        </div>
      </section>
    );
  }
}

export default Compare;
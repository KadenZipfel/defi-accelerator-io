import React, {Component} from 'react';

import CompareBoxItem from './CompareBoxItem';

import '../layout/components/compare-box.sass';

class CompareBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defiAcceleratorInterestRateMantissa: 0.13467,
      compoundInterestRateMantissa: 0.0633,
      defiAcceleratorValues: null,
      compoundValues: null,
      compareBoxItems: null
    }
  }

  // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    let compareBoxItems = [];

    const defiAcceleratorValues = [
      [['Interest Rate:'], [`%${(this.state.defiAcceleratorInterestRateMantissa * 100).toFixed(3)}`]],
      [['Balance:'], [`$${this.numberWithCommas(this.props.amount)}`]],
      [['Yearly Interest:'], [`$${this.numberWithCommas((this.props.amount * this.state.defiAcceleratorInterestRateMantissa).toFixed(2))}`]],
      [['Monthly Interest:'], [`$${this.numberWithCommas(((this.props.amount * this.state.defiAcceleratorInterestRateMantissa) / 12).toFixed(2))}`]],
      [['Weekly Interest:'], [`$${this.numberWithCommas(((this.props.amount * this.state.defiAcceleratorInterestRateMantissa) / 52).toFixed(2))}`]],
      [['Daily Interest:'], [`$${this.numberWithCommas(((this.props.amount * this.state.defiAcceleratorInterestRateMantissa) / 365).toFixed(2))}`]]
    ]

    const compoundValues = [
      [['Interest Rate:'], [`%${(this.state.compoundInterestRateMantissa * 100).toFixed(3)}`]],
      [['Balance:'], [`$${this.numberWithCommas(this.props.amount)}`]],
      [['Yearly Interest:'], [`$${this.numberWithCommas((this.props.amount * this.state.compoundInterestRateMantissa).toFixed(2))}`]],
      [['Monthly Interest:'], [`$${this.numberWithCommas(((this.props.amount * this.state.compoundInterestRateMantissa) / 12).toFixed(2))}`]],
      [['Weekly Interest:'], [`$${this.numberWithCommas(((this.props.amount * this.state.compoundInterestRateMantissa) / 52).toFixed(2))}`]],
      [['Daily Interest:'], [`$${this.numberWithCommas(((this.props.amount * this.state.compoundInterestRateMantissa) / 365).toFixed(2))}`]],
    ]

    if(this.props.header === "Defi Accelerator") {
      defiAcceleratorValues.forEach((value, index) => {
        compareBoxItems.push(
          <CompareBoxItem key={index} index={index} prop={value[0]} value={value[1]} />
        );
      });
    } else if(this.props.header === "Compound") {
      compoundValues.forEach((value, index) => {
        compareBoxItems.push(
          <CompareBoxItem key={index} index={index} prop={value[0]} value={value[1]} />
        );
      });
    }

    return (
      <div className="compare-box">
        <h4 className="compare-box__header">
          {this.props.header}
        </h4>
        {compareBoxItems}
      </div>
    );
  }
}

export default CompareBox;
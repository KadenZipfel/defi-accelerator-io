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

  render() {
    let compareBoxItems = [];

    const defiAcceleratorValues = [
      [['Interest Rate:'], [`%${this.state.defiAcceleratorInterestRateMantissa * 100}`]],
      [['Balance:'], [`${this.props.amount}`]],
      [['Yearly Interest:'], [`${this.props.amount * this.state.defiAcceleratorInterestRateMantissa}`]],
      [['Monthly Interest:'], [`${(this.props.amount * this.state.defiAcceleratorInterestRateMantissa) / 12}`]],
      [['Weekly Interest:'], [`${(this.props.amount * this.state.defiAcceleratorInterestRateMantissa) / 52}`]],
      [['Daily Interest:'], [`${(this.props.amount * this.state.defiAcceleratorInterestRateMantissa) / 365}`]]
    ]

    const compoundValues = [
      [['Interest Rate:'], [`%${this.state.compoundInterestRateMantissa * 100}`]],
      [['Balance:'], [`${this.props.amount}`]],
      [['Yearly Interest:'], [`${this.props.amount * this.state.compoundInterestRateMantissa}`]],
      [['Monthly Interest:'], [`${(this.props.amount * this.state.compoundInterestRateMantissa) / 12}`]],
      [['Weekly Interest:'], [`${(this.props.amount * this.state.compoundInterestRateMantissa) / 52}`]],
      [['Daily Interest:'], [`${(this.props.amount * this.state.compoundInterestRateMantissa) / 365}`]],
    ]

    if(this.props.header === "Defi Accelerator") {
      defiAcceleratorValues.forEach((value) => {
        compareBoxItems.push(
          <CompareBoxItem key={value[0]} prop={value[0]} value={value[1]} />
        );
      });
    } else if(this.props.header === "Compound") {
      compoundValues.forEach((value) => {
        compareBoxItems.push(
          <CompareBoxItem key={value[0]} prop={value[0]} value={value[1]} />
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
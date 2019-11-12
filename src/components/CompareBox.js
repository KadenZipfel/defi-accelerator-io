import React, {Component} from 'react';

import CompareBoxItem from './CompareBoxItem';

import '../layout/components/compare-box.sass';

class CompareBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defiAcceleratorInterestRateMantissa: null,
      compoundInterestRateMantissa: null,
      defiAcceleratorValues: null,
      compoundValues: null,
      compareBoxItems: null
    }
  }

  componentDidMount = () => {
    this.getCompoundSupplyRate();
  }

  // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getCompoundSupplyRate = async () => {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://api.compound.finance/api/v2/ctoken?addresses[]=0xf5dce57282a584d2746faf1593d3121fcac444dc', true);
    xhr.send();
  
    xhr.onreadystatechange = (e) => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const cDai = JSON.parse(xhr.responseText);
        const supplyRate = cDai.cToken[0].supply_rate.value;
        this.setState({compoundInterestRateMantissa: supplyRate, defiAcceleratorInterestRateMantissa: supplyRate * 1.5});
      }
    }
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
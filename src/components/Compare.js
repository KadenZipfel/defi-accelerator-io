import React, {Component} from 'react';

import CompareBox from './CompareBox';

import '../layout/components/compare.sass'

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1000000
    }
  }

  handleChange = (e) => {
    this.setState({amount: e.target.value});
  }

  // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  isNotMobileBrowser = () => {
    var check = true;
    if((window.innerWidth < 480) || (window.innerHeight < 480)) {
      check = false
    }
    return check;
  };

  render() {
    return (
      <section className="compare">
        <div className="compare__header">
          <h2 className="compare__heading">
            See How Much
            <div className="compare__placeholder">
              <input 
                type='text' 
                className="compare__input"
                value={this.state.amount.toLocaleString()}
                autoFocus={this.isNotMobileBrowser}
                onChange={this.handleChange}
                maxLength="7"
              />
            </div>
            Can Make You
          </h2>
          <p className="compare__info">
            Make the most of DeFi by maximizing your earnings.
          </p>
        </div>
        <div className="compare__boxes">
          <CompareBox header="Defi Accelerator" {...this.state} />
          <CompareBox header="Compound" {...this.state} />
        </div>
      </section>
    );
  }
}

export default Compare;
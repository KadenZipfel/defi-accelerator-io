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
                value={this.state.amount} 
                autoFocus={true}
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
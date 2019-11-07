import React, {Component} from 'react';

class CompareBox extends Component {
  

  render() {
    return (
      <div className="compare-box">
        <h4 className="compare-box__header">
          {this.props.header}
        </h4>
        <div className="compare-box__property">
          <p className="compare-box__key">

          </p>
          <p className="compare-box__value">
            
          </p>
        </div>
      </div>
    );
  }
}

export default CompareBox;
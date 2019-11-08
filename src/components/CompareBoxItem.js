import React from 'react';

function CompareBoxItem(props) {
  return(
    <div className="compare-box__item">
      <p className="compare-box__prop">
        {props.prop}
      </p>
      <p className="compare-box__value">
        {props.value}
      </p>
    </div>
  );
}

export default CompareBoxItem;
import React from 'react';

function CompareBoxItem(props) {
  return(
    <div className="compare-box__item">
      <p className={`compare-box__prop compare-box__prop--${props.index}`}>
        {props.prop}
      </p>
      <p className={`compare-box__value compare-box__value--${props.index}`}>
        {props.value}
      </p>
    </div>
  );
}

export default CompareBoxItem;
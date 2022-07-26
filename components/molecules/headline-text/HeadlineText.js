import React from 'react';


const HeadlineText = (props) => (
  <div className={props.orientation || ''}>
    <div className="headline-text cmp">
      <div className={props.gap || ''}>
        <div className={`${props.customClass} cmp-text`}>{props.children}</div>
      </div>
    </div>
  </div>
);

export default HeadlineText;

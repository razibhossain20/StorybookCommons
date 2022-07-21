import React from 'react';
import PropTypes from 'prop-types';


const HeadlineText = (props) => (
  <div className={props.orientation || ''}>
    <div className="headline-text cmp">
      <div className={props.gap || ''}>
        <div className={`${props.customClass} cmp-text`}>{props.children}</div>
      </div>
    </div>
  </div>
);

HeadlineText.propTypes = {
  children: PropTypes.node.isRequired,
  /** The custom class for text */
  customClass: PropTypes.string
};

HeadlineText.defaultProps = {
  customClass: ''
};

export default HeadlineText;

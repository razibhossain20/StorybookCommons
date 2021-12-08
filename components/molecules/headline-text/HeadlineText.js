import React from 'react';
import PropTypes from 'prop-types';
import HtmlComment from '../../particles/html-comment/HtmlComment';


const HeadlineText = (props) => (
  <div className={props.orientation || ''}>
    <div className="headline-text cmp">
      <HtmlComment text="Start headline-text component markup, Copy from here" />
      <div className={props.gap || ''}>
        <div className={`${props.customClass} cmp-text`}>{props.children}</div>
      </div>
      <HtmlComment text="End headline-text component markup," />
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

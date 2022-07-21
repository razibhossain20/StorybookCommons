import React from 'react';

const Button = (props) => (
  <div class="button-link section">
    <button className={`btn ${props.button_styles ? 'btn-' + props.button_styles : ''}  ${props.button_width || ''}`}
      type={props.button_type || ''}
      data-type={props.button_data_type || ''}
      title={props.buttonlink_title || ''}>
      {props.btn_text || ''}
    </button>

  </div >
)



export default Button;
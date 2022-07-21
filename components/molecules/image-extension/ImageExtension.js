import React from 'react';
import PropTypes from 'prop-types';


const ImageExtension = (props) => (
  <div className="image-extension section">

    <div className={`${props.image_position || ''} image-container`}>

      <a href={props.image_href} className={props.image_size}>
        {/* For Desktops && lAPTOP  */}
        <img className={`${props.bottom_gap} d-none d-lg-block img-fluid`}
          src={props.image_src}
          srcSet={`${props.image_src} 1920w, ${props.image_src} 1440w, ${props.image_src} 1080w`}
          alt="Desktop Image" />

        {/* For TABLET  */}
        <img className={`${props.bottom_gap} d-none d-md-block d-lg-none img-fluid`}
          src={props.image_src}
          srcSet={`${props.image_src} 1920w, ${props.image_src} 1440w, ${props.image_src} 1080w`}
          alt="Tablet Image" />

        {/* For Moblie  */}
        <img className={`${props.bottom_gap} d-md-none img-fluid`}
          src={props.image_src}
          srcSet={`${props.image_src} 1300w, ${props.image_src} 975w, ${props.image_src} 730w`}
          alt="Mobile Image" />

      </a>
    </div>
  </div>
);

ImageExtension.propTypes = {
  /** The custom class for set width */
  image_size: PropTypes.string,
  /** The custom class for set bottom gap */
  bottom_gap: PropTypes.string
};

ImageExtension.defaultProps = {
  image_size: '',
  bottom_gap: ''
};

export default ImageExtension;

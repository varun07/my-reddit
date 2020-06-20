import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import pageErrorImg from '../../../assets/page-error.png';
import tryAgainImg from '../../../assets/try-again.png';

function reloadWindow() {
  window.reload();
}

export default function ErrorScreen(props) {
  const { className, actions, reloadPage, errorMessageLink } = props;
  return (
    <div className={`page-error-screen w_bg ${className}`}>{/* w_bg comes from static4/smCommon */}
      <div className="error-screen-content-wrapper">
        <img src={pageErrorImg} className="page-error-image" alt="page error" height="150px" width="150px" />
        {!!actions && (
          <div className="error-actions">
            <img src={tryAgainImg} className="try-again-img" alt="try again" />
            <span className="try-again-link" onClick={reloadPage}>{errorMessageLink}</span>
          </div>
        )}
      </div>
    </div>
  )
}

ErrorScreen.propTypes = {
  className: PropTypes.string,
  actions: PropTypes.bool
}

ErrorScreen.defaultProps = {
  className: '',
  actions: true,
  errorMessageLink: 'Try again',
  reloadPage: reloadWindow
}
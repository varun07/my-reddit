import React from 'react';
import './styles.scss';

export default function NavButtons(props) {
  const {showPrevBtn = true, showNextBtn = true, onPrevBtnClick, onNextBtnClick} = props;
  return (
    <div className="nav-btn--wrapper">
      {showPrevBtn && <div className="nav-btn nav-btn--previous" onClick={onPrevBtnClick}>Previous</div>}
      {showNextBtn && <div className="nav-btn nav-btn--next" onClick={onNextBtnClick}>Next</div>}
    </div>
  )
}
import React from 'react';
import './styles.scss';

export default function Loader(props) {

  const style = {
    position: props.position || 'fixed',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 99999999,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(255,255,255,0.7)',
  };
  return (
    <div className="valign-wrapper" style={style}>
      <div className="preloader-wrapper big active valign" style={{ margin: '0 auto' }}>
        <div className="spinner-layer spinner-blue">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

const LoggedOut = () => {
  return (
    <div className="right-side">

      <div className="header-widget">
        <a href="#sign-in-dialog" className="popup-with-zoom-anim log-in-button"><i className="icon-feather-log-in"></i> <span>Log In / Register</span></a>
      </div>

      <span className="mmenu-trigger">
        <button className="hamburger hamburger--collapse" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </span>

    </div>
  )
}

export default LoggedOut;

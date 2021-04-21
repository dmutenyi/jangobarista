import React from 'react'

const IntroBanner = () => {
  return (
    <div className="intro-banner dark-overlay big-padding">

      <div className="transparent-header-spacer"></div>

      <div className="container">

        <div className="row">
          <div className="col-md-12">
            <div className="banner-headline-alt">
              <h3>Don't Just Dream, Do</h3>
              <span>Jango Baristas</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="intro-banner-search-form margin-top-95">

              <div className="intro-search-field with-autocomplete">
                <label htmlFor="autocomplete-input" className="field-title ripple-effect">Where?</label>
                <div className="input-with-icon">
                  <input id="autocomplete-input" type="text" placeholder="Coffee Type" />
                  <i className="icon-material-outline-location-on"></i>
                </div>
              </div>

              <div className="intro-search-field">
                <label htmlFor="intro-keywords" className="field-title ripple-effect">What do you want to know?</label>
                <input id="intro-keywords" type="text" placeholder="Coffee or Keywords" />
              </div>

              <div className="intro-search-button">
                <button className="button ripple-effect" >Search</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <ul className="intro-stats margin-top-45 hide-under-992px">
              <li>
                <strong className="counter">1,586</strong>
                <span>Jobs Posted</span>
              </li>
              <li>
                <strong className="counter">3,543</strong>
                <span>Tasks Posted</span>
              </li>
              <li>
                <strong className="counter">1,232</strong>
                <span>Freelancers</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="video-container" data-background-image="images/home-video-background-poster.jpg">
        <video loop autoPlay muted>
          <source src="images/home-video-background.mp4" type="video/mp4" />
        </video>
      </div>

    </div>
  )
};

export default IntroBanner;

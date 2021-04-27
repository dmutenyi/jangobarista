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





      </div>

      <div className="video-container" data-background-image="images/banner1.jpg">
        <video loop autoPlay muted>
          <source src="images/home-video-background.mp4" type="video/mp4" />
        </video>
      </div>

    </div>
  )
};

export default IntroBanner;

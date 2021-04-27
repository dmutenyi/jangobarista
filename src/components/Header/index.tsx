import React from 'react';
import LoggedOut from './loggedOut';

const Header = () => {
  return (
    <header id="header-container" className="fullwidth">

      {/* <!-- Header --> */}
      <div id="header">
        <div className="container">

          {/* <!-- Left Side Content --> */}
          <div className="left-side">

            {/* <!-- Logo --> */}
            <div id="logo">
              <a href="index.html"><img src="/logo_black.jpg" alt="" /></a>
            </div>

            {/* <!-- Main Navigation --> */}
            <nav id="navigation">
              <ul id="responsive">

                <li><a href="/" className="current">Home</a></li>

                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/contactus">Contact Us</a></li>

                <li><a href="/blogs">Blog</a></li>

              </ul>
            </nav>
            <div className="clearfix"></div>
            {/* <!-- Main Navigation / End --> */}

          </div>
          {/* <!-- Left Side Content / End --> */}


          {/* <!-- Right Side Content / End --> */}
          <LoggedOut />
          {/* <!-- Right Side Content / End --> */}

        </div>
      </div>
      {/* <!-- Header / End --> */}

    </header>
  )
};

export default Header;

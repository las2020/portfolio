import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>Software developer</h1>
        <Typed
          className="typed-text"
          strings={[
            "Mobile App Developement",
            "Web Development", 
            "Data Analysis and Visualization",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        {/* <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer">contact me</Link> */}
      </div>
    </div>
  );
};

export default Header;

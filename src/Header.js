import React from "react";
import headerimg from './img/header.png';
import dateTxt from './img/dateTxt.png';
import './style.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-img">
        <img src={headerimg} alt="car" width="100%" />
      </div>
      <div className="header-date-txt">
        <img src={dateTxt} alt="car" width="100%" />
      </div>
    </div>
  )
}
export default Header;
import React from 'react'
import './styles.css'
import lens from '../../assets/lens.png'

const Header = () => {

  return (
    <div className="header">
      <div className="headerContent">
        <div >
          <a className="headerTitle" href="">Rule of Thumb.</a>
        </div>
        <div className="linksContainer">
          <a className="headerLinks" href="">Past Trials</a>
          <a className="headerLinks" href="">How It Works</a>
          <a className="headerLinks" href="">Log In / Sign Up</a>
          <a className="headerLinks" href="">
            <img src={lens} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
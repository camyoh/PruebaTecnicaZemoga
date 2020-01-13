import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
import lens from '../../assets/lens.png'

const Header = () => {

  return (
    <div className="header">
      <div className="headerContent">
        <div >
          <a className="headerTitle" href="/#">Rule of Thumb.</a>
        </div>
        <div className="linksContainer">
          <Link to="/pastTrials">Past Trials</Link>
          <Link to="/howitworks">How It Works</Link>
          <Link to="/logIn">Log In / Sign Up</Link>
          <Link to="/search">
            <img src={lens} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
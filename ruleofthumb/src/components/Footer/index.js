import React from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'


const footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="socialIcons">
          Follow Us
          <FontAwesomeIcon icon={faFacebookSquare} size='2x'/>
          <FontAwesomeIcon icon={faTwitter} size='2x'/>
        </div>
      </div>
    </>
  );
}

export default footer;
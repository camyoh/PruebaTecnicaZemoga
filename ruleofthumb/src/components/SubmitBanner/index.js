import React from 'react'
import './styles.css'

const submitBanner = () => {
  return (
    <div className="banner">
      <p className="bannerText">Is there anyone else you would want us to add?</p>
      <div className="submitButton">Submit a Name</div>
    </div>
  );
}

export default submitBanner;
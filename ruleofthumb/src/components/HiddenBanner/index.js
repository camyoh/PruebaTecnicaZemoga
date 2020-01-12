import React from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import xIcon from '../../assets/xIcon.png'

const hiddenBanner = () => {
  return (
    <>
      <div className="hiddenBanner">
        <div className="bannerTitles">
          <p className="bannerSutitle">Speak out. Be heard</p>
          <p className="bannerTitle">Be Counted</p>
        </div>
        <div className="bannerBody">Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy: You share your opinion, we analyze and put the data in a public report.</div>
        <div className="bannerCloseIcon">
          <img src={xIcon} alt="" className="xIcon"/>
        </div>
      </div>
    </>
  );
}

export default hiddenBanner;
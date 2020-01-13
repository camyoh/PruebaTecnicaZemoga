import React from 'react'
import './styles.css'
import thumbsUpLogo from '../../assets/thumbsUp.png'
import thumbsDownLogo from '../../assets/thumbsDown.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'

const floatingDescription = ({ title, body }) => {
  return (
    <>
      <div className="floatingContainer">
        <p className="opinionText">What's your opinion on</p>
        <p className="nameText">{title}</p>
        <p className="introductionText">{body}</p>
        <div className="wikiLogo">
          <FontAwesomeIcon icon={faWikipediaW} />
          <div className={"wikiText"}>
            <Link to="/moreInformation">More information</Link>
          </div>
        </div>
        <p className="questionText">What's Your Verdict?</p>
      </div>
      <div className="thumbsIcons">
        <div className="thumbsUp">
          <img src={thumbsUpLogo} alt="like" className='icons' />
        </div>
        <div className="thumbsDown">
          <img src={thumbsDownLogo} alt="dislike" className='icons' />
        </div>
      </div>
    </>
  );
}

export default floatingDescription;
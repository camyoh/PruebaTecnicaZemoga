import React from 'react'
import './styles.css'
import thumbsUpLogo from '../../assets/thumbsUp.png'
import thumbsDownLogo from '../../assets/thumbsDown.png'

const ProgressBar = ({ percentValueLikes, percentValuedisLikes, likes, dislikes }) => {
  const likeWidth = { width: `${percentValueLikes}%` };
  const dislikeWidth = { width: `${percentValuedisLikes}%` }

  return (
    <>
    
      <div className="bar">
        <div className="progress" style={likeWidth}>
        </div>
        <div className="dislikeProgress" style={dislikeWidth}>
          <div className="dislikePercent"></div>
        </div>
        <div className="percentTextBar">
          <div className="percentValueLeft">
            <img src={thumbsUpLogo} alt="likeButton" className='likeButton' />
            {`${likes}%`}
          </div>
          <div className="percentValueRigth">
          {`${dislikes}%`}
            <img src={thumbsDownLogo} alt="dislikeButton" className='dislikeButton' />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
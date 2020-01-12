import React from 'react'
import thumbsUpLogo from '../../assets/thumbsUp.png'
import thumbsDownLogo from '../../assets/thumbsDown.png'
import './styles.css'

const popularIcon = ({ likeCount, dislikeCount}) => {

  const showIcon = (likeCount, dislikeCount) => {
    if (likeCount > dislikeCount) {
      return (
        <div className="popular">
          <img src={thumbsUpLogo} alt="like" className='icon' />
        </div>
      )
    }
    if (dislikeCount > likeCount) {
      return (
        <div className="unpopular">
          <img src={thumbsDownLogo} alt="dislike" className='icon' />
        </div>
      );
    }
    return (
      <div className="emptyIcon" />
    );
  }

  return (
    <>
      {showIcon(likeCount, dislikeCount)}
    </>
  );
}

export default popularIcon;
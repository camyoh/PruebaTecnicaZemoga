import React, { useState, useEffect } from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import thumbsUpLogo from '../../assets/thumbsUp.png'
import thumbsDownLogo from '../../assets/thumbsDown.png'

const transparent = 'rgba(0, 0, 0, 0)'
const VoteNow = ({ voteLikeFunction, voteDislikeFunction, index }) => {

  const [borderLike, setBorderLike] = useState({ outlineColor: transparent });
  const [borderDislike, setBorderDislike] = useState({ outlineColor: transparent });
  const [canVote, setCanVote] = useState(null);
  const [showThumbsButton, setShowThumbsButton] = useState(true);

  const likeClicked = () => {
    if (borderLike.outlineColor == 'white') {
      setBorderLike({ outlineColor: transparent })
      setCanVote(null);
    } else {
      setCanVote('like')
      setBorderLike({ outlineColor: 'white' })
      setBorderDislike({ outlineColor: transparent })
    }
  }

  useEffect(() => {

  }, [])

  const dislikeClicked = () => {
    if (borderDislike.outlineColor == 'white') {
      setBorderDislike({ outlineColor: transparent })
      setCanVote(null)
    } else {
      setCanVote('dislike')
      setBorderDislike({ outlineColor: 'white' })
      setBorderLike({ outlineColor: transparent })
    }
  }

  const voteNowClicked = () => {
    switch (canVote) {
      case 'like':
        voteLikeFunction(index);
        setShowThumbsButton(false);
        setCanVote('alreadyVote');
        setBorderLike({ outlineColor: transparent })
        break;
      case 'dislike':
        voteDislikeFunction(index);
        setShowThumbsButton(false);
        setCanVote('alreadyVote');
        setBorderDislike({ outlineColor: transparent })
        break;
        case 'alreadyVote':
        setShowThumbsButton(true)
        break;

      default:
        break;
    }
  }

  return (
    <>
      <div className="container">
        {showThumbsButton ?
          <>
            <div className="like" onClick={likeClicked} style={borderLike} >
              <img src={thumbsUpLogo} alt="like" className='icon' />
            </div>
            <div className="dislike" onClick={dislikeClicked} style={borderDislike}>
              <img src={thumbsDownLogo} alt="dislike" className='icon' />
            </div>
          </>
          : null}

        <div className="voteNow" onClick={voteNowClicked}>
          <p className="voteText">
            {showThumbsButton? 'Vote now' : 'Vote again'}
          </p>
        </div>
      </div>
    </>
  );
}

export default VoteNow;
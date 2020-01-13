import React from 'react'
import { ProgressBar, VoteNow, PopularityIcon } from '../../components'
import './styles.css'


const card = ({
  character,
  index,
  voteLikeFunction,
  voteDislikeFunction,
}) => {


  const likesPercentage = (likes, dislikes) => {
    if (likes === 0 && dislikes === 0) {
      return 0;
    } else {
      return likes / (likes + dislikes) * 100;
    }
  }

  const dislikesPercentage = (likes, dislikes) => {
    if (likes === 0 && dislikes === 0) {
      return 0;
    } else {
      return 100 - likesPercentage(likes, dislikes);
    }
  }

  const styles = { backgroundImage: `linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8)), url(${character.urlImage})` }

  return (
    <>
      <div className="card" style={styles}>
        <div className="content">
          <div className="cahracterData">
            <PopularityIcon 
              likeCount={character.thumbsUp}
              dislikeCount={character.thumbsDown}
            />
            <div className="description">
              <p className="cardTittle">
                {character.name}
              </p>
              <p className="cardSubtitle">
                <b>1 month ago </b>in {character.role}
              </p>
              <VoteNow
                voteLikeFunction={voteLikeFunction}
                voteDislikeFunction={voteDislikeFunction}
                index={index}
              />
            </div>
          </div>
          <ProgressBar
            percentValueLikes={likesPercentage(character.thumbsUp, character.thumbsDown)}
            percentValuedisLikes={dislikesPercentage(character.thumbsUp, character.thumbsDown)}
            likes={Math.round(likesPercentage(character.thumbsUp, character.thumbsDown))}
            dislikes={Math.round(dislikesPercentage(character.thumbsUp, character.thumbsDown))}
          />
        </div>
      </div>
    </>
  );
}

export default card;
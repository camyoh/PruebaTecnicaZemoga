import React from 'react'
import { ProgressBar, VoteNow } from '../../components'
import './styles.css'

const card = ({
  character,
  onHanddleClick,
  index,
  voteLikeFunction,
  voteDislikeFunction
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

  return (
    <>
      <div className="card">
        <VoteNow
          voteLikeFunction={voteLikeFunction}
          voteDislikeFunction={voteDislikeFunction}
          index={index} />
        <ProgressBar
          percentValueLikes={likesPercentage(character.thumbsUp, character.thumbsDown)}
          percentValuedisLikes={dislikesPercentage(character.thumbsUp, character.thumbsDown)}
          likes={Math.round(likesPercentage(character.thumbsUp, character.thumbsDown))}
          dislikes={Math.round(dislikesPercentage(character.thumbsUp, character.thumbsDown))}
        />
        <button onClick={() => onHanddleClick(index)}>Enviar</button>
        <p>
          Name: {character.name}
        </p>
        <p>
          Role: {character.role}
        </p>
        <p>
          Likes: {character.thumbsUp}
        </p>
        <p>
          Dislikes: {character.thumbsDown}
        </p>
        <img
          src={character.urlImage}
          alt={character.name}
        />
      </div>
    </>
  );
}

export default card;
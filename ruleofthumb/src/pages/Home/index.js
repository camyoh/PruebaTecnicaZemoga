import React, { useState, useEffect } from 'react';
import './styles.css';
import { databaseRef } from '../../firebase';
import { Header, Card, ProgressBar, VoteNow } from '../../components';

import firebase from 'firebase/app';
import 'firebase/database';
import card from '../../components/Card';

const useTimes = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    databaseRef.on('value', snapshot => {
      const data = snapshot.val();
      const characterList = data.characterList.map((character) => (character));
      setCharacterList(characterList);
    });
  }, [])


  const voteThumpsUp = (index) => {
    firebase.database().ref('characterList/' + index).set({
      ...characterList[index],
      thumbsUp: characterList[index].thumbsUp + 1,
    });
  }

  const voteThumpsDown = (index) => {
    firebase.database().ref('characterList/' + index).set({
      ...characterList[index],
      thumbsDown: characterList[index].thumbsDown + 1,
    });
  }

  const percent = (up, down) => {
    return up + down;
  }

  const moveBar = (until, index) => {
    const progress = document.querySelector('.progress');
    let atPercentage = characterList[index].thumbsUp;
    const interval = setInterval(() => {
      progress.style.width = atPercentage + "%";
      atPercentage++;
      if (atPercentage > until) {
        clearInterval(interval);
      }
    }, 10);

  }

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
      {/* <Header /> */}
      {
        characterList.map((character, index) => (
          <div key={character.name}>
            <Card
              character={character}
              onHanddleClick={voteThumpsUp}
              index={index}
              voteLikeFunction={voteThumpsUp}
              voteDislikeFunction={voteThumpsDown}
            />
            {/* <VoteNow /> */}
            {/* <ProgressBar
              percentValueLikes={likesPercentage(character.thumbsUp, character.thumbsDown)}
              percentValuedisLikes={dislikesPercentage(character.thumbsUp, character.thumbsDown)}
              likes={Math.round(likesPercentage(character.thumbsUp, character.thumbsDown))}
              dislikes={Math.round(dislikesPercentage(character.thumbsUp, character.thumbsDown))}
            /> */}
            {/* <button onClick={() => enviar(index)}>Enviar</button>
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
            <p>
              Percent: {percent(character.thumbsUp, character.thumbsDown)}
            </p>
            <img
              src={character.urlImage}
              alt={character.name}
            /> */}
          </div>
        ))
      }
    </>
  );
}

export default useTimes;

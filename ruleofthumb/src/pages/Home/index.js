import React, { useState, useEffect } from 'react';
import './styles.css';
import { databaseRef } from '../../firebase';
import { Card, SubmitBanner, Footer, HiddenBanner, Banner } from '../../components';

import firebase from 'firebase/app';
import 'firebase/database';
import card from '../../components/Card';
import hiddenBanner from '../../components/HiddenBanner';

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
      <Banner />
      <div className="charactersContainer">
        <HiddenBanner />
        <div className="bodyTittle">Votes</div>
        {
          characterList.map((character, index) => (
            <div key={character.name}>
              <Card
                character={character}
                index={index}
                voteLikeFunction={voteThumpsUp}
                voteDislikeFunction={voteThumpsDown}
              />
            </div>
          ))
        }
        <SubmitBanner />
        <div className="dotLine" />
        <Footer />
      </div>

    </>
  );
}

export default useTimes;

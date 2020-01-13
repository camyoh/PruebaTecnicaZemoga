import React, { useState, useEffect } from 'react';
import './styles.css';
import { databaseRef } from '../../firebase';
import { Card, SubmitBanner, Footer, HiddenBanner, Banner } from '../../components';

import firebase from 'firebase/app';
import 'firebase/database';

const useTimes = () => {
  const [characterList, setCharacterList] = useState([]);
  const [principalCharacter, setPrincipalCharacter] = useState([]);

  useEffect(() => {
    databaseRef.on('value', snapshot => {
      const data = snapshot.val();
      const characterList = data.characterList.map((character) => (character));
      setCharacterList(characterList);
    });
    databaseRef.on('value', snapshot => {
      const data = snapshot.val();
      const principalCharacter = data.mainCharacter;
      setPrincipalCharacter(principalCharacter);
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

  return (
    <>
      <Banner title={principalCharacter.name} body={principalCharacter.introduction} />
      <div className="bodyContainer">
        <HiddenBanner />
        <div className="bodyTittle">Votes</div>
        <div className="characterContainer">
          {
            characterList.map((character, index) => (
              <Card
                key={character.name}
                character={character}
                index={index}
                voteLikeFunction={voteThumpsUp}
                voteDislikeFunction={voteThumpsDown}
              />
            ))
          }
        </div>
        <SubmitBanner />
        <div className="dotLine" />
        <Footer />
      </div>

    </>
  );
}

export default useTimes;

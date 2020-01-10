import React, { useState, useEffect } from 'react';
import './styles.css';
import { databaseRef } from '../../firebase';
import { Header } from '../../components';

const useTimes = () => {
    const [times, setTimes] = useState([]);
    useEffect(() => {
        databaseRef.on('value', snapshot => {
            const data = snapshot.val();
            const newTimes = data.characterList.map((character) => (character))
            setTimes(newTimes)
        });
    }, [])
    return times;
}

const Home = () => {
    const data = useTimes();
    return (
        <>
            {/* <Header /> */}
            {
                data.map((character) => (
                    <div key={character.name}>
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
                            alt="new"
                        />
                    </div>
                ))
            }
        </>
    );
}

export default Home;

import { useState } from 'react';
import React from 'react';
import Board from '../board/Board';

const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i --) {
        const x = Math.floor(Math.random() * (i + 1));

        [array[i], array[x] = [array[x], array[i]]];
    }
};

const gerenateCards = () => {
    const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

    const cards = values.map(() => ({
        values,
        isFlipped: false
    }))

    const duplicatedCards = cards.concat([...cards]).map((card, index) => ({
      ...card, index
    }));

    shuffleCards(duplicatedCards);
};

const Game = () => {
    const [cards, setCards] = useState(gerenateCards());
    const [flippedCards, setFlippedCards] = useState([]);
    const [remainingChances, setRemainingChances] = useState(6);

    return (
        <div className="game-container">
            <Board />
        </div>
    );
}

export default Game
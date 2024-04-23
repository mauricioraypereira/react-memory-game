import { useState } from 'react';
import React from 'react';
import Board from '../board/Board';
import SimpleButton from '../../../../album-project/src/components/buttons/SimpleButton/SimpleButton';

import './Game-Style.css';

const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const x = Math.floor(Math.random() * (i + 1));

        [array[i], array[x]] = [array[x], array[i]];
    }

    return array;
};

const generateCards = () => {
    const values = ['♥', '$', '▲', '♦', '♣', '♠', '♫', '♪'];

    const cards = values.map((value ) => ({
        value,
        isFlipped: false
    }));

    const duplicatedCards = cards
        .concat([...cards])
        .map((card, index) => ({ ...card, index }));
    
    return shuffleCards(duplicatedCards);
};

const Game = () => {
    const [cards, setCards] = useState(generateCards());
    const [flippedCards, setFlippedCards] = useState([]);
    const [remainingChances, setRemainingChances] = useState(6);
    
    const gameResult = cards.filter((card) => card.isFlipped).length;

    return (
        <div className="game-container">
            <Board cards={cards} />
            {remainingChances === 0 ? (
                <p>Suas tentativas acabaram, fim de jogo!</p>
            ) : gameResult === cards.length ? (
                <p>Parabéns você venceu!</p>
            ) : (
                <p>Você possui {remainingChances} tentativa(s) restante(s)...</p>
            )}
            <SimpleButton content="Reiniciar o jogo" />
        </div>
    );
}

export default Game;
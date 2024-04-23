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
        .map((card, index) => ({ ...card, id: index }));
    
    return shuffleCards(duplicatedCards);
};

const Game = () => {
    const [cards, setCards] = useState(generateCards());
    const [flippedCards, setFlippedCards] = useState([]);
    const [remainingChances, setRemainingChances] = useState(6);
    
    const gameResult = cards.filter((card) => card.isFlipped).length;

    const handleCardClick = (clickedCard) => {
        if (remainingChances === 0)  return;

        if (flippedCards.length === 2)  return;

        const newCards = cards.map((card) => {
            return card.id === clickedCard.id 
            ? { ...card, isFlipped: true }
            : card;
        });

        setCards(newCards);
        setFlippedCards([...flippedCards, clickedCard]);

        if (flippedCards.length === 1) {
            setTimeout(() => {
                const [firstCard] = flippedCards;

                if (firstCard.value !== clickedCard.value) {
                    const resetCards = cards.map((card) => {
                        return card.id === firstCard.id || card.id === clickedCard.id
                        ? { ...card, isFlipped: false }
                        : card;
                    });

                    setCards(resetCards);
                    setRemainingChances((prev) => prev - 1);
                }
                setFlippedCards([]);
            }, 800)
        }
    }

    return (
        <div className="game-container">
            <Board cards={cards} onCardClick={handleCardClick} />
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
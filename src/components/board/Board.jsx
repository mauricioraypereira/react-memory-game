import React from 'react';
import Card from '../card/Card';

import './Board-Style.css';

const Board = ({ cards, onCardClick, actualDificult }) => {
    return (
        <div className={`board-container ${actualDificult.value}`}>
            {cards.map((card) => (
                <Card key={card.id} card={card} onClick={onCardClick}/>
            ))}
        </div>
    );
}

export default Board;
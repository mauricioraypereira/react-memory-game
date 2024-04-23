import React from 'react';
import Card from '../card/Card';

import './Board-Style.css';

const Board = ({cards}) => {
    return (
        <div className="board-container">
            {cards.map((card) => (
                <Card key={card.id} card={card}/>
            ))}
        </div>
    );
}

export default Board;
import React from 'react';

import './Card-Style.css';

const Card = ({ card, onClick }) => {
    return (
        <div className={`card-container ${card.isFlipped ? 'flipped' : ''}`} onClick={() => onClick(card)}>
            {card.isFlipped ? card.value : '???'}
        </div>
    )
}

export default Card;
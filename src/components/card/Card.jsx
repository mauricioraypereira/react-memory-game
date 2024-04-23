import React from 'react';

import './Card-Style.css';

const Card = ({ card }) => {
    return (
        <div className={`card-container ${card.isFlipped ? 'flipped' : ''}`}>
            {card.isFlipped ? card.value : '???'}
        </div>
    )
}

export default Card;
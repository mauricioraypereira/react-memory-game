import Card from '../card/Card';
import PropTypes from 'prop-types';

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

Board.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isFlipped: PropTypes.bool.isRequired,
            value: PropTypes.number.isRequired,
        })    
    ).isRequired,
    onCardClick: PropTypes.func.isRequired,
    actualDificult: PropTypes.shape({
        value: PropTypes.string,
        title: PropTypes.string
    }).isRequired,
};

export default Board;
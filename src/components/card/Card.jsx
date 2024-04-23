import PropTypes from 'prop-types';
import './Card-Style.css';

const Card = ({ card, onClick }) => {
    return (
        <div className={`card-container ${card.isFlipped ? 'flipped' : ''}`} onClick={() => onClick(card)}>
            {card.isFlipped ? card.value : '???'}
        </div>
    )
}

Card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number.isRequired,
        isFlipped: PropTypes.bool.isRequired,
        value: PropTypes.number.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Card;
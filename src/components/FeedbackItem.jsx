import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './layouts/Card.jsx';

const FeedbackItem = ({ feedback, deleteFeedback }) => {
    return (
        <Card>
            <div className="num-display">{feedback.rating}</div>
            <button
                className="close"
                onClick={() => deleteFeedback(feedback.id)}
            >
                <FaTimes color="purple" />
            </button>
            <div className="text-display">{feedback.text}</div>
        </Card>
    );
};

FeedbackItem.propTypes = {
    feedback: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
    deleteFeedback: PropTypes.func.isRequired,
};

export default FeedbackItem;

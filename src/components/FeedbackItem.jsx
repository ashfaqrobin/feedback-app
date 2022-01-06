import { FaEdit, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './layouts/Card.jsx';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext.js';

const FeedbackItem = ({ feedback }) => {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

    return (
        <Card>
            <div className="num-display">{feedback.rating}</div>
            <button
                className="close"
                onClick={() => deleteFeedback(feedback.id)}
            >
                <FaTimes color="purple" />
            </button>
            <button className="edit" onClick={() => editFeedback(feedback)}>
                <FaEdit color="purple" />
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
};

export default FeedbackItem;

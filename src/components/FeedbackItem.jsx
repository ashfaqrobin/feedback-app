import PropTypes from 'prop-types';
import Card from './layouts/Card.jsx';

const FeedbackItem = ({ feedback }) => {
    return (
        <Card>
            <div className="num-display">{feedback.rating}</div>
            <div className="text-display">{feedback.text}</div>
        </Card>
    );
};

FeedbackItem.propTypes = {
    feedback: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
};

export default FeedbackItem;

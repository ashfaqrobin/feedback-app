import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ feedbackData }) => {
    if (!feedbackData || feedbackData.length === 0) {
        return (
            <div className="feedback-list">
                <p>No feedback yet</p>
            </div>
        );
    }

    return (
        <div className="feedback-list">
            {feedbackData.map((feedback) => (
                <FeedbackItem key={feedback.id} feedback={feedback} />
            ))}
        </div>
    );
};

FeedbackList.propTypes = {
    feedbackData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ),
};

export default FeedbackList;

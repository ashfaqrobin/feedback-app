import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';

const FeedbackList = ({ feedbackData, deleteFeedback }) => {
    if (!feedbackData || feedbackData.length === 0) {
        return (
            <div className="feedback-list">
                <p>No feedback yet</p>
            </div>
        );
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedbackData.map((feedback) => (
                    <motion.div
                        key={feedback.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem
                            key={feedback.id}
                            feedback={feedback}
                            deleteFeedback={deleteFeedback}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

FeedbackList.propTypes = {
    feedbackData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ),
    deleteFeedback: PropTypes.func.isRequired,
};

export default FeedbackList;

import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
    const { feedback } = useContext(FeedbackContext);

    if (!feedback || feedback.length === 0) {
        return (
            <div className="feedback-list">
                <p>No feedback yet</p>
            </div>
        );
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((feedback) => (
                    <motion.div
                        key={feedback.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem key={feedback.id} feedback={feedback} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default FeedbackList;

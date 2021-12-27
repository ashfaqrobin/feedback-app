import { useState } from 'react';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';

import FeedbackData from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
    const [feedbackData, setFeedbackData] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            setFeedbackData(
                feedbackData.filter((feedback) => feedback.id !== id)
            );
        }
    };

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm />
                <FeedbackStats feedback={feedbackData} />
                <FeedbackList
                    feedbackData={feedbackData}
                    deleteFeedback={deleteFeedback}
                />
            </div>
        </>
    );
};

export default App;

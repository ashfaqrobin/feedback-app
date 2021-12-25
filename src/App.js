import { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';

import FeedbackData from './data/FeedbackData';

const App = () => {
    const [feedbackData, setFeedbackData] = useState(FeedbackData);

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackList feedbackData={feedbackData} />
            </div>
        </>
    );
};

export default App;

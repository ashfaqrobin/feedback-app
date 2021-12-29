import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';

import FeedbackData from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';

const App = () => {
    const [feedbackData, setFeedbackData] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            setFeedbackData(
                feedbackData.filter((feedback) => feedback.id !== id)
            );
        }
    };

    const addFeedback = (feedback) => {
        const newFeedback = {
            id: uuidv4(),
            text: feedback.review,
            rating: feedback.rating,
        };

        setFeedbackData([newFeedback, ...feedbackData]);
    };

    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    {/* Home page route */}
                    <Route
                        exact
                        path="/"
                        element={
                            <>
                                <FeedbackForm addFeedback={addFeedback} />
                                <FeedbackStats feedback={feedbackData} />
                                <FeedbackList
                                    feedbackData={feedbackData}
                                    deleteFeedback={deleteFeedback}
                                />
                            </>
                        }
                    />

                    {/* About page route */}
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
                <AboutIconLink />
            </div>
        </Router>
    );
};

export default App;

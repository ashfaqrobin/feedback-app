import { v4 as uuidv4 } from 'uuid';
import { createContext, useEffect, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    const [feedback, setFeedback] = useState([]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    useEffect(async () => {
        try {
            setIsLoading(true);
            await fetchFeedback();
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    }, []);

    const fetchFeedback = async () => {
        const response = await fetch('http://localhost:5000/feedback');

        const data = await response.json();

        setFeedback(data);
    };

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    const addFeedback = (newFeedback) => {
        const createdFeedback = {
            id: uuidv4(),
            text: newFeedback.review,
            rating: newFeedback.rating,
        };

        setFeedback([createdFeedback, ...feedback]);
    };

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        });
    };

    const updateFeedback = (updatedFeedback) => {
        setFeedback(
            feedback.map((item) =>
                item.id === updatedFeedback.id ? updatedFeedback : item
            )
        );
        setFeedbackEdit({
            item: {},
            edit: false,
        });
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                deleteFeedback,
                addFeedback,
                editFeedback,
                feedbackEdit,
                updateFeedback,
                isLoading,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;

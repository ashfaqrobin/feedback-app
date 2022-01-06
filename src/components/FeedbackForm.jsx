import { useContext, useEffect, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Button from './layouts/Button';
import Card from './layouts/Card';
import RatingSelect from './RatingSelect';

const FeedbackForm = () => {
    const [review, setReview] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const { addFeedback, feedbackEdit, updateFeedback } =
        useContext(FeedbackContext);

    // Fill up form on edit
    useEffect(() => {
        if (feedbackEdit.edit) {
            setBtnDisabled(false);
            setReview(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit]);

    const handleReviewChange = (e) => {
        if (review.trim().length > 10) {
            setReview(e.target.value);
            setBtnDisabled(false);
            setErrorMessage('');
            return;
        }

        setReview(e.target.value);
        setBtnDisabled(true);
        setErrorMessage('Review must be at least 10 characters long');
    };

    // Select user rating
    const [rating, setRating] = useState(10);

    const handleRatingChange = (currentRating) => {
        setRating(currentRating);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (review.trim().length < 10) {
            setErrorMessage('Review must be at least 10 characters long');
            return;
        }

        if (feedbackEdit.edit) {
            updateFeedback({
                id: feedbackEdit.item.id,
                text: review,
                rating,
            });
        } else {
            const newFeedback = {
                rating,
                review,
            };

            addFeedback(newFeedback);
        }

        setReview('');
        setBtnDisabled(true);
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h3>How would you rate your service with us?</h3>
                <RatingSelect select={handleRatingChange} />
                <div className="input-group">
                    <input
                        onChange={handleReviewChange}
                        type="text"
                        placeholder="Write a review..."
                        value={review}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>
                        Submit
                    </Button>
                </div>
                {errorMessage && <div className="message">{errorMessage}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;

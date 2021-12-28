import { useState } from 'react';
import Button from './layouts/Button';
import Card from './layouts/Card';
import RatingSelect from './RatingSelect';

const FeedbackForm = ({ addFeedback }) => {
    const [review, setReview] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

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

        const newFeedback = {
            rating,
            review,
        };

        addFeedback(newFeedback);

        setReview('');
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

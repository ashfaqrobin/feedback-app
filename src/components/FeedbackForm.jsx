import { useState } from 'react';
import Button from './layouts/Button';
import Card from './layouts/Card';

const FeedbackForm = () => {
    const [review, setReview] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const handleReviewChange = (e) => {
        if (review.length > 10) {
            setReview(e.target.value.trim());
            setBtnDisabled(false);
            setErrorMessage('');
            return;
        }

        setReview(e.target.value.trim());
        setBtnDisabled(true);
        setErrorMessage('Review must be at least 10 characters long');
    };

    return (
        <Card>
            <form>
                <h3>How would you rate your service with us?</h3>
                {/* Todo: rating select component */}
                <div className="input-group">
                    <input
                        onChange={handleReviewChange}
                        type="text"
                        placeholder="Write a review..."
                        value={review}
                    />
                    <Button typs="submit" isDisabled={btnDisabled}>
                        Submit
                    </Button>
                </div>
                {errorMessage && <div className="message">{errorMessage}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;

import React from 'react';
import useReviewHook from '../../hooks/useReviewHook';
import CustomerReview from '../CustomerReview/CustomerReview';
import './ReviewsComp.css'
const ReviewsComp = () => {
    const [reviews, setReviews] = useReviewHook();
    return (
        <div className='reviews-container'>
            {
                    reviews.map(review =><CustomerReview
                        key={review._id}
                        review={review}
                    ></CustomerReview>)
                }
        </div>
    );
};

export default ReviewsComp;
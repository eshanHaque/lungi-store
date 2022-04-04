import React from 'react';
import useReviewHook from '../../hooks/useReviewHook';
import './CustomerReview.css'
const CustomerReview = (props) => {
    const {name, description, rating} = props.review;
    
    return (
        <div className='review-container'>
            <h4 className='customer-name'>{name}</h4>
            <p>{description}</p>
            <p className='rating'>Rating: <span className='rating-number'>{rating}</span></p>
        </div>
    );
};

export default CustomerReview;
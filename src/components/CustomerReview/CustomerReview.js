import React from 'react';

const CustomerReview = (props) => {
    const {name, description, rating} = props.review;
    return (
        <div>
            <h4>{name}</h4>
            <p>{description}</p>
            <p>{rating}</p>
        </div>
    );
};

export default CustomerReview;
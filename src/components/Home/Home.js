import React from 'react';
import useReviewHook from '../../hooks/useReviewHook';
import img from '../../images/lungi.jpg';
import CustomerReview from '../CustomerReview/CustomerReview';
import './Home.css';
const Home = () => {
    const [reviews, setReviews] = useReviewHook();
    return (
        <div>
            <div className='product-container'>
                <div className='product-details'>
                    <div className='product-name'>
                        <h2>Lungi Galaxy Fold</h2>
                        <h2>You will be cold</h2>
                    </div>
                    <p>This is lungi for every human on earth. You can have many benifits for wearing a lungi. Its take one second for wearing a lungi. Lungi is very comfortable. You can use it anywhere in any place in the  world. You can aslo change cloth by using it. You can change cloth any where inthe world by using it. </p>
                </div>
                <div className='product-image'>
                    <img src={img} alt="" />
                </div>
            </div>

            <div className='reviews-container'>
                <h2>Customer Review</h2>
                {
                    reviews.map(review => <CustomerReview
                        key={review._id}
                        review={review}
                    ></CustomerReview>)
                }
            </div>
        </div>
    );
};

export default Home;
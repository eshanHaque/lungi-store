import React from 'react';
import './Blog.css'
const Blogs = () => {
    return (
        <div className='blogs-container'>
            <div className='question-ans'>
                <h2 className='blogs-ques'>What is Contex Api?</h2>
                <p className='blogs-ques-ans'>Contex Api produced global variable that can be passed around. Contex Api primarly used when some data need be share many components at different nasting level. <br /> Contex Api returns a provider and consumer. Provider is the main parent component of all components. Provider is a store of all components. </p>
            </div>
            <div className='question-ans'>
                <h2 className='blogs-ques'>What is a Semantic tag?</h2>
                <p  className='blogs-ques-ans'>A Semantic tag easily describe its meaning by the browser and athe developer. In Semantic tag there difination in the code  to  tells the browser and the developer  what they suppose to do. It introduces meaning to the web page rather than just presentation. div and span are the non Semantic tag. article, footer, header, form are Semantic tag. </p>
            </div>
        </div>
    );
};

export default Blogs;
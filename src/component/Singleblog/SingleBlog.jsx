import React, { useState } from 'react';
import './single.css'

const SingleBlog = ({content}) => {
   
 console.log(content)

    return (
        <div className='parent-content'>
    <div className="content">
    <img src={content.img} alt="" />
    
    </div>
        </div>
    );
};

export default SingleBlog;
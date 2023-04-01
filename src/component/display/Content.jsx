import React, { useEffect, useState } from 'react';
import './Content.css'


const Content = () => {
 
    useEffect(()=>{
         fetch ('../../../fakeData/products.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div className='display-blog'>

            <div className="blog-side">

            </div>

            <div className="blog-details-side">

            </div>
        </div>
    );
};

export default Content;
import React, { useEffect, useState } from 'react';
import './Content.css'
import SingleBlog from '../Singleblog/SingleBlog';


const Content = () => {
    const [blogs , setblogs] = useState([])
    useEffect(()=>{
         fetch ('products.json')
        .then(res => res.json())
        .then(data => setblogs(data))
        
    },[])
    return (
        <div className='display-blog'>

            <div className="blog-side">
               
               {blogs.map(blog => <SingleBlog
               
               content = {blog}
               ></SingleBlog> )}
            </div>

            <div className="blog-details-side">

            </div>
        </div>
    );
};

export default Content;
import React, { useEffect, useState } from 'react';
import axios from 'axios'
function FetchingDataHooks(props) {
    const [post,getData]=useState([])

    useEffect(()=>{
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(data => {
                console.log("data is ", data)
                getData(data)
            })
            .catch(err => { console.log("errro is ", err) })
    },[])
    return (
        <div>
            {post.map(post=><div key={post.id}>{post.title}</div>)}
        </div>
    );
}

export default FetchingDataHooks;
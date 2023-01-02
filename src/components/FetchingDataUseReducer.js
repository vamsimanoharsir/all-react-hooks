import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FetchingDataUseReducer(props) {

    const [loading, setLoad]=useState(false)
    const [error, setError]=useState('')
    const [post, setData]=useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(data => {
                console.log("data is ", data)
                setLoad({ loading: false })
                setData(data.data)
                setError('')
            })
            .catch(err=>{console.log("error is ",err)})
    })

    return (
        <div>
            {loading?'loading':post.title}
        </div>
    );
}

export default FetchingDataUseReducer;
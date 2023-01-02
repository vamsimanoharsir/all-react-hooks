import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState={
    loading:false,
    post:{},
    error:''
}
const reducer=(state, action)=>{
    switch(action.type){
        case 'success':return{
            loading:false,
            post:action.payload,
            error:''
        }
        case 'failure':return{
            loading:true,
            post:{},
            error:'Error occured'
        }
        default:return state
    }
}
function FetchingDataUseReducer2(props) {
    const [newState, dispatcher]=useReducer(reducer, initialState) //initialState = obj

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(data => {
                console.log("data is ", data)
                dispatcher({type:'success',payload:data.data})
            })
            .catch(err=>{dispatcher({type:'failure'})})
    },[])

    return (
        <div>
            {newState.loading?'loading':newState.post.title}
        </div>
    );
}

export default FetchingDataUseReducer2;
import React, { useReducer } from 'react';

const initialState=0
const reducerFunction=(state,action)=>{   //initialState is initialState in line 3
    switch(action){
        case 'increment':return state+1
        case 'decrement':return state-1
        case 'reset':return 0
        default : return state  //returned state is newState in line 15

    }
}

function HookUseReducer(props) {
    console.log('reducer called')
    const [newState, dispatcher]=useReducer(reducerFunction, initialState) //two arguments
    return (
        <div>
            <div>count is {newState}</div>
            <button onClick={()=>dispatcher('increment')}>increment</button>
            <button onClick={()=>dispatcher('decrement')}>decrement</button>
            <button onClick={()=>dispatcher('reset')}>reset</button>
        </div>
    );
}

export default HookUseReducer;
import React, { useReducer } from 'react';

const initialState=0
const reducerFunction=(state,action)=>{   //we use switch case in useReducer
    switch(action){
        case 'increment':return state+1
        case 'decrement':return state-1
        case 'reset':return 0
        default : return state  //returned state is newState in line 15

    }
}

function MultipleUseReducers(props) {
    
    const [newState, dispatcher]=useReducer(reducerFunction, initialState) //two arguments
    const [newStateTwo, dispatcherTwo]=useReducer(reducerFunction, initialState)

    return (
        <div>
            <div>count is {newState}</div>
            <button onClick={()=>dispatcher('increment')}>increment</button>
            <button onClick={()=>dispatcher('decrement')}>decrement</button>
            <button onClick={()=>dispatcher('reset')}>reset</button>
            <div>count is {newStateTwo}</div>
            <button onClick={()=>dispatcherTwo('increment')}>increment</button>
            <button onClick={()=>dispatcherTwo('decrement')}>decrement</button>
            <button onClick={()=>dispatcherTwo('reset')}>reset</button>
        </div>
    );
}

export default MultipleUseReducers;
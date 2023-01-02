import React, { useReducer } from 'react';


//with objects, we use 'type' with dispatcher when calling actions
const initialState={
    count:0
}
const reducerFunc=(state, action)=>{
    switch(action.type){
        case 'increment':return state+action.value
        case 'decrement':return state-1
        case 'reset':return 0
        default : return state
    }
}
function HookUseReducer2(props) {

    const [newState,dispatcher]=useReducer(reducerFunc,initialState)
    return (
        <div>  
            <div>count is {newState}</div>
            {/* to increment by three */}
            <button onClick={()=>dispatcher({type:'increment',value:3})}>increment</button> 
            <button onClick={()=>dispatcher({type:'decrement'})}>decrement</button>
            <button onClick={()=>dispatcher({type:'reset'})}>reset</button>
        </div>
    );
}

export default HookUseReducer2;
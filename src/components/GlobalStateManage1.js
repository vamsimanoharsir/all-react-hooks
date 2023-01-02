import React, { useContext } from 'react';
import App, { contextVal } from '../App';

//in global state management
//dispatcher - same, context Value - different
function GlobalStateManage1(props) {
    const contextVal2 = useContext(contextVal) //context consumer in useContext
    return (
        <div>
            <button onClick={() => contextVal2.dispatcher1('increment')}>increment</button>
            <button onClick={() => contextVal2.dispatcher1('decrement')}>decrement</button>
            <button onClick={() => contextVal2.dispatcher1('reset')}>reset</button>
        </div>
    );
}

export default GlobalStateManage1;
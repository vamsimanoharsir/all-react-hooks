import React, { useContext } from 'react';
import App, { contextVal } from '../App';

function GlobalStateManage2(props) {
    const contextVal3 = useContext(contextVal)
    return (
        <div>
            <button onClick={() => contextVal3.dispatcher1('increment')}>increment</button>
            <button onClick={() => contextVal3.dispatcher1('decrement')}>decrement</button>
            <button onClick={() => contextVal3.dispatcher1('reset')}>reset</button>
        </div>
    );
}

export default GlobalStateManage2;
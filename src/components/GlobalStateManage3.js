import React, { useContext } from 'react';
import App, { contextVal } from '../App';

function GlobalStateManage3(props) {
    const contextVal1 = useContext(contextVal)
    return (
        <div>
            <button onClick={() => contextVal1.dispatcher1('increment')}>increment</button>
            <button onClick={() => contextVal1.dispatcher1('decrement')}>decrement</button>
            <button onClick={() => contextVal1.dispatcher1('reset')}>reset</button>

        </div>
    );
}

export default GlobalStateManage3;
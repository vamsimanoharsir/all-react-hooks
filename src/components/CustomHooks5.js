import React from 'react';
import CustomHooks4 from './CustomHooks4';

function CustomHooks5(props) {

    const [count, increment, decrement, reset]=CustomHooks4()

    return (
        <div>
            <div>count is {count}</div>
            <button onClick={increment}>increment</button><br/>
            <button onClick={decrement}>decrement</button><br/>
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default CustomHooks5;
import React, { useState, useMemo } from 'react';
import { MemoisedReact } from './ReactmemosvsUseMemo2';

export const ReactmemosvsUseMemo = () => {

    const obj = {
        lname: 'react',
        fname: 'angular'
    }

    //using useMemo we can pass objects, functions as props to child components for optimization
    //we cant do this with React.memo
    const useMemoObjectHandler=useMemo(()=>obj,[])
    const [count, setCount] = useState(0)
    
    console.log('parent render')
    return (
        <div>
            <div>count = {count}</div>
            <button onClick={() => setCount(count + 1)}>increment</button>
            {/* assign object to func that inturn returns the same object */}
            <MemoisedReact name='react' obj={useMemoObjectHandler} /> 
        </div>
    );
}

export default ReactmemosvsUseMemo;
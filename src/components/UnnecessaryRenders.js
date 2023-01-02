import React, { useState } from 'react';
import UnnecessaryRenders2 from './UnnecessaryRenders2';

export const UnnecessaryRenders=({children})=>{ //array destructuring
    
    const [count,setCount]=useState(0)
    const incrementCount=()=>{
        setCount(count+1)
    }
    console.log('parent render')
    return (
        // <div>
        //     {/* with this everytime the parent and child renders which is not effective */}
        //     <div>count = {count}</div>
        //     <button onClick={incrementCount}>increment</button>
        //     <UnnecessaryRenders2/>
        // </div>

        <div>
            {/* called as same element reference technique */}
            {/* child component wont render after every parent render */}
            {/* we all know react allows state to change but props cannot be changed
            so we are passing the child component as a prop to stop unnecessary renders */}
            <div>count = {count}</div>
            <button onClick={incrementCount}>increment</button>
            {children}
        </div>
    );
}

export default UnnecessaryRenders;
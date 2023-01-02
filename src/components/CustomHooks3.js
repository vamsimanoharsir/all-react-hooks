import React, { useEffect, useState } from 'react';
import CustomHooks1 from './CustomHooks1';

function CustomHooks3(props) {

    const [count,setCount]=useState(0)

    CustomHooks1(count)
    return (
        <div>
            <div>count is {count}</div>
            <button onClick={()=>setCount(count+1)}>increment</button>
        </div>
    );
}

export default CustomHooks3;
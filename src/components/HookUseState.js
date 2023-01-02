import React, { useState } from 'react';

function HookUseState() {

    //two arguments => constant, funtion()
    //hooks are used to implement state in react functional components
    //these should only be called at the top level
    const [count,buttonClick]=useState(0)  //0 is the initial value of the count, can be any datatype
    return (                                //buttonClick is same function
        <div>
        <button onClick={()=>buttonClick(count+1)}>Clicked {count} </button>
        </div>
    );
}

export default HookUseState;
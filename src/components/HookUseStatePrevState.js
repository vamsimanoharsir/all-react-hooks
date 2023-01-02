import React, { useState } from 'react';

function HookUseStatePrevState() {
    const [count,buttonClick]=useState(0)

function Increment(){
    //this method should take a function as an argument that has access to prev state count value
    //name can be anything
    buttonClick(prevCount=>prevCount+3)  
}
    
    return (
        <div>
            <div>{count} times</div>
            <button onClick={()=>buttonClick(count+1)}>increment by 1</button><br/>
            <button onClick={()=>buttonClick(count-1)}>decrement by 1</button><br/>
            <button onClick={()=>buttonClick(0)}>reset to zero</button><br/>
            <button onClick={()=>Increment()}>increment by 3</button><br/>   {/* one way */}
            <button onClick={()=>buttonClick(prevCount=>prevCount+4) }>increment by 4</button>    {/* second way */}
        </div>
    );
}

export default HookUseStatePrevState;
import React, { useEffect, useState } from 'react';

function HookUseEffectOnlyOnce(props) {
    const [count,anyFunc1]=useState(0)

    useEffect(()=>{
        console.log("use effect is called")
    },[]) //If we pass an empty array as second argument then it is similar to componentDidMount
    return (
        <div>
            <button onClick={()=>anyFunc1(count+1)}>Clicked {count} Times</button>
        </div>
    );
}

export default HookUseEffectOnlyOnce;
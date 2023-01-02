import React, { useEffect, useState } from 'react';

function HookUseEffectConditionally(props) {
    const [count,anyFunction]=useState(0)
    const [name,anyFunc1]=useState('')

    //this is run after every render no matter what
    // useEffect(()=>{     
    //     console.log('clicked'+{count}+'times')
    // })

    //to conditionally run useEffect, pass an array as the second argument
    //that has props or state and update accordingly
    useEffect(()=>{     
        console.log('clicked'+{count}+'times')
    },[count]) //here only if count value changes only then useEffect is run

    return (
        <div>
            <button onClick={()=>anyFunction(count+1)}>Clicked {count} times</button>
            <input type="text" value={name} onChange={e => anyFunc1(e.target.value)}></input>
        </div>
    );
}

export default HookUseEffectConditionally;
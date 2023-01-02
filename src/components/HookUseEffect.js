import React, { useEffect, useState } from 'react';

function HookUseEffect(props) {
    const [count,anyFunction]=useState(0)

    //useEffect() takes a function as an argument
    //that will be executes when component is first mounted and after every render
    //similarly that function can return a function that executes when the component unmounts
    useEffect(()=>{     //arraow func that executes after every render
        console.log(`clicked ${count} times`)
    })
    return (
        <div>
            <button onClick={()=>anyFunction(count+1)}>Clicked {count} times</button>
        </div>
    );
}

export default HookUseEffect;
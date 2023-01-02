import React, { useEffect, useState } from 'react';

function HookComponentUnmount(props) {
    const [count,anyFunc1]=useState(0)

    //the function passed as an argument to useEffect should return a function that will be executed
    //when component is unmounted, similar to componentwillUnmount
    useEffect(() => {
        console.log("use effect is called")

        return () => {
            console.log('component is unmounted!!!')
        }
    }, []) 

    return (
        <div>
            <button onClick={()=>anyFunc1(count+1)}>Clicked {count} Times</button>
        </div>
    );
}

export default HookComponentUnmount;
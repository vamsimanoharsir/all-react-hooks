import React, { useState } from "react";
import { MemoisedReactMemos } from "./ReactMemos2";  //instead of ReactMemos2

//parent component
export const ReactMemos1=()=>{

    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }

    console.log('parent render')

    return(
        <div>
            <div>count = {count}</div>
            <button onClick={increment}>click me for increment</button>

            {/* child component doenst rerender if children(text within tags) have no styling efects */}
            <MemoisedReactMemos name='react'>hello</MemoisedReactMemos>
            {/* children will rerender everytime because style has to be applied after every render*/}
            <MemoisedReactMemos name='react'><b>hello</b></MemoisedReactMemos>
        </div>
    );
}
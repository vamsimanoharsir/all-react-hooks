import React, { useState } from 'react';
import { MemoisedContext } from './ContextAndSameReference2';
export const contextVal=React.createContext()

export const ContextAndSameReference=({children})=>{

    const ContextProvider=contextVal.Provider

    const [count,setCount]=useState(0)
    console.log('parent rendered')
    
    //both parent and child will render
    // return (
    //     <div>
    //         <div>count = {count}</div>
    //         <button onClick={()=>setCount(count+1)}>increment</button>
    //         <ContextProvider value={count}>
    //             <MemoisedContext/>
    //         </ContextProvider>
    //     </div>
    // );

    return (
        <div>
            <div>count = {count}</div>
            <button onClick={()=>setCount(count+1)}>increment</button>
            <ContextProvider value={count}>
                {children}
            </ContextProvider>
        </div>
    );

}

export default ContextAndSameReference;
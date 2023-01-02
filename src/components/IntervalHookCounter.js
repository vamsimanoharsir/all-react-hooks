import React, {useState, useEffect} from 'react';

function IntervalHookCounter(props) {
    const [count, anyFunc]=useState(0)

    const tick=()=>{
            anyFunc(count+1)
        }
 
    useEffect(()=>{
        const timer=setInterval(tick,2000)
        return ()=>{
            console.log('unmounted!!!')
            clearInterval(timer)}
    },[count]) //count is dependency

    return (
        <div>
            count is {count}
        </div>
    );

    }
export default IntervalHookCounter;
import React, { useEffect,useRef, useState } from 'react';

function UseRefHook2(props) {

    const [count, setTimer]=useState(0)
    const RefVal=useRef(null)

    useEffect(()=>{
        RefVal.current=setInterval(()=>{
            setTimer(prevState=>prevState+1)  //not like prevState.count in class components
        },1000)

        return ()=>clearInterval(RefVal.current) //function will be executed when the component is unmounted
    },[])
    
    return (
        <div>
            <div>count - {count}</div>
            <button onClick={()=>clearInterval(RefVal.current)}>clear interval</button>
        </div>
    );
}

export default UseRefHook2;
import React, { useEffect,useRef } from 'react';

function UseRefHook(props) {

    const RefVal=useRef(null)  //initial value is null

    useEffect(()=>{
        RefVal.current.focus()
    },[])

    return (
        <div>
            <input type="text" ref={RefVal}></input>
        </div>
    );
}

export default UseRefHook;
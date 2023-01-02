import React, { useState, useMemo } from 'react';

// function UseMemoHooks(props) {

//     //everytime state changes the component rerenders
//     const [count1, setCount1]=useState(0)
//     const [count2, setCount2]=useState(0)

//     const increment1=()=>{ 
//         setCount1(count1+1)
//     }
//     const increment2=()=>{
//         setCount2(count2+1)
//     }

//     const isEven=()=>{
//         return count1%2===0
//     }

//     return (
//         <div>
//             <button onClick={increment1}>Count1 is {count1}</button>
//             <button onClick={increment2}>Count2 is {count2}</button>
//             <span>{isEven()?'even':'odd'}</span>
//         </div>
//     );
// }


//using useMemoHook
//this will compute cashed value only when the dependecy changes
//this way we can avoid expensive repetative calculations
function UseMemoHooks(props){

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const increment1 = () => {
        setCount1(count1 + 1)
    }
    const increment2 = () => {
        setCount2(count2 + 1)
    }

    //takes func whose value will be cashed and computed everytime and a dependency
    const isEven=useMemo(()=>{
        return count1%2===0
    },[count1])

    return (
        <div>
            <button onClick={increment1}>Count1 is {count1}</button>
            <button onClick={increment2}>Count2 is {count2}</button>
            <span>{isEven ? 'even' : 'odd'}</span>
        </div>
    );
}

export default UseMemoHooks;
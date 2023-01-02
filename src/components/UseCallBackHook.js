import React, { useState, useCallback } from 'react'
const UseCallBackHook = () => {

    //without useCallback()
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)

    const incrementCounter = () => { //everytime is called
        console.log('create')
        setCount(count + 1)
    }
    const decrementCounter = () => {
        console.log('create')
        setCount(count - 1)
    }

    const incrementNumber = () => {
        console.log('create')
        setNumber(number + 1)
    }


    //as we already know after every state change component rerenders
    //after every rerender these three functions are created again which is not usefull
    //we overcome this with usecallback hook this returns a memoized callback function
    return (
        <div>
            Count: {count}
            number: {number}
            <button onClick={incrementCounter}>
                Increase counter
            </button>
            <button onClick={decrementCounter}>
                Decrease Counter
            </button>
            <button onClick={incrementNumber}>
                increase number
            </button>
        </div>
    )
}


export default UseCallBackHook;

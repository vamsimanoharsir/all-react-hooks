import React, { useState, useCallback } from 'react'
const UseCallBackHook2 = () => {


    //using useCallback()
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)

    const incrementCounter = useCallback(() => { //not called everytime
        console.log('create')
        setCount(count + 1)
    }, [count])
    const decrementCounter = useCallback(() => {
        console.log('create')
        setCount(count - 1)
    }, [count])
    const incrementNumber = useCallback(() => {
        console.log('create')
        setNumber(number + 1)
    }, [number])


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


export default UseCallBackHook2;

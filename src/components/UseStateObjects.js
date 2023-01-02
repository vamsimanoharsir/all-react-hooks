import React, { useState } from 'react';

//muting objects with useState
const obj={
    fname:'react',
    lname:'angular'
}

export const UseStateObjects=()=>{

    const [name, setName] = useState(obj)

    const changeName = () => {
        //cannot directly use name object, we should use spread operarot
        //same for arrays as well
        const newName={...name}
        newName.fname='js'
        newName.lname='java'
        setName(newName)
    }

    console.log("rendered")

    return(
        <div>
            <div>{name.fname} and {name.lname}</div>
            <button onClick={changeName}>click me</button>
        </div>
    );
}

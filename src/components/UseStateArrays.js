import React, { useState } from "react";

const old=['react','angular']
export const UseStateArrays=()=>{
   const [name,setName]=useState(old)

   const changeName=()=>{
    //for changing arrays and objects we must use spread operator
    const newarray=[...name]
    newarray.push('js')
    newarray.push('java')
    newarray.push('mongo')
    setName(newarray)
   }
   return(
    <div>
        <div>{name} array</div>
        <button onClick={changeName}>click me</button>
    </div>
   );
}
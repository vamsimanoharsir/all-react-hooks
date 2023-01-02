import React, { useState } from 'react';

//custom hook
function CustomHooks4(props) {
   const [count,setCount]=useState(0)

   const increment=()=>{
    setCount(prevCount=>prevCount+1);
   }

   const decrement=()=>{
    setCount(prevCount=>prevCount-1);
   }

   const reset=()=>{
    setCount(prevCount=>0)
   }

   return [count,increment, decrement,reset];
}

export default CustomHooks4;
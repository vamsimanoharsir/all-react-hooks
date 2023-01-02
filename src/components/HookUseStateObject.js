import React, { useState } from 'react';

function HookUseStateObject(props) {

    //buttonClick is hook function, any changes or anything should be done by this with arrow functions
    const [obj,buttonClick]=useState({'name':'react','rno':1})
    console.log(obj)
    return (
        <div>
            <button onClick={()=>buttonClick(1)}>object {obj.rno} {obj.name}</button>
        </div>
    );
}

export default HookUseStateObject;
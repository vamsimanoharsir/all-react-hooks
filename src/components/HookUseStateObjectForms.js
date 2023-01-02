import React, { useState } from 'react';

function HookUseStateObjectForms(props) {
    const [obj, buttonClick]=useState({'fname':'react','lname':'angular','rno':2})
    return (

        //on browser we can see only one variable being displayed and not all
        //because useState doesnt automatically update and merge objects like setState does
        //setState merges objects , in useState doesnt do it we need to do it manually(spread operator)
        <div>
            <form>
                {/* first name:<input type="text" value={obj.fname} onChange={(e)=>buttonClick({...obj,fname:e.target.value})}></input><br/> */}
                first name:<input type="text" value={obj.fname} onChange={(e)=>buttonClick({fname:e.target.value})}></input><br/>
                last name:<input type="text" value={obj.lname} onChange={(e)=>buttonClick({lname:e.target.value})}></input><br/>
                rno:<input type="text" value={obj.rno} onChange={(e)=>buttonClick({rno:e.target.value})}></input><br/>
                fname:<div>{obj.fname}</div>
                lname:<div>{obj.lname}</div>
                rno:<div>{obj.rno}</div>
            </form>
        </div>
    );
}

export default HookUseStateObjectForms;
import React from 'react';
export const ReactmemosvsUseMemo2=({name,obj})=>{
    console.log('child render')
    return (
        <div>
            name is {name} {obj.lname} {obj.fname}
        </div>
    );
}

export const MemoisedReact=React.memo(ReactmemosvsUseMemo2) //React.memo creation
//with this ReactmemosvsUseMemo2 will rerender only when props(obj) changes
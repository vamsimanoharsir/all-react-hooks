import React, { useContext } from 'react';
import { contextVal } from './ContextAndSameReference';

export const ContextAndSameReference2=()=>{
    const count=useContext(contextVal)
    console.log('child rendered')
    return (
        <div>
            count = {count}
        </div>
    );
}

export const MemoisedContext=React.memo(ContextAndSameReference2);
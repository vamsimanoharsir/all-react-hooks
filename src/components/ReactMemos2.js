import React from 'react';

export const ReactMemos2=({children, name})=>{ //children is the text between html tags step 2
    console.log('child render')
    return (
        <div>
            child component {children} {name}
        </div>
    );
}

export const MemoisedReactMemos=React.memo(ReactMemos2) //React.memo syntax step 1

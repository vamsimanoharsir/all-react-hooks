import React, { useContext } from 'react';
import { hookVariable } from '../App';

function UseContextHooks3(props) {
    console.log('child')
    const name = useContext(hookVariable) //basically same as a consumer
    return (
        <div>
            name is {name}
        </div>
    );
}

export default UseContextHooks3;
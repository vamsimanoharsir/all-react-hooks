import React from 'react';
import UseContextHooks2 from './UseContextHooks2';

function UseContextHooks(props) {
    console.log('parent 1')
    return (
        <div>
            <UseContextHooks2/>
        </div>
    );
}

export default UseContextHooks;
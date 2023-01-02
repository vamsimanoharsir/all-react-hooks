import React from 'react';
import UseContextHooks3 from './UseContextHooks3';

function UseContextHooks2(props) {
    console.log('parent 2')
    return (
        <div>
            <UseContextHooks3/>
        </div>
    );
}

export default UseContextHooks2;
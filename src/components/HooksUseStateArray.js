import React, { useState } from 'react';

function HooksUseStateArray(props) {
    const [l,anyFunction]=useState([1,2,3,4])
    return (
        <div>
            <ul>
                {l.map(l=><li key={l.valueOf()}>{l}</li>)}
                
            </ul>
        </div>
    );
}

export default HooksUseStateArray;
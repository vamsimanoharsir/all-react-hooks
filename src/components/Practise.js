import React from 'react';

function Practise(props) {
    console.log('react rendering')
    console.log('react rendering 2')
    //in index.js our App component is wrapped between <React.StrictMode>
    //because of this our console statements will appear on console twice in dev but once in prod
    //if we comment <React.StrictMode> we only have single instance of console statements
    return (
        <div>
            <button> click me</button>
        </div>
    );
}

export default Practise;
import { useEffect } from 'react';

//custom hook
function CustomHooks1(props) {
    useEffect((count)=>{
        document.title=`count ${count} times`
    },[])
}

export default CustomHooks1;
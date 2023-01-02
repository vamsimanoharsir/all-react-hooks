import logo from './logo.svg';
import './App.css';
import React,{useReducer} from 'react';
import HookUseState from './components/HookUseState';
import HookUseStatePrevState from './components/HookUseStatePrevState';
import HookUseStateObject from './components/HookUseStateObject';
import HookUseStateObjectForms from './components/HookUseStateObjectForms';
import HooksUseStateArray from './components/HooksUseStateArray';
import HookUseEffect from './components/HookUseEffect';
import HookUseEffectConditionally from './components/HookUseEffectConditionally';
import HookUseEffectOnlyOnce from './components/HookUseEffectOnlyOnce';
import HookComponentUnmount from './components/HookComponentUnmount';
import IntervalHookCounter from './components/IntervalHookCounter';
import FetchingDataHooks from './components/FetchingDataHooks';
import UseContextHooks from './components/UseContextHooks';
import UseContextHooks3 from './components/UseContextHooks3';
import HookUseReducer from './components/HookUseReducer';
import HookUseReducer2 from './components/HookUseReducer2';
import MultipleUseReducers from './components/MultipleUseReducers';
import GlobalStateManage1 from './components/GlobalStateManage1';
import GlobalStateManage2 from './components/GlobalStateManage2';
import GlobalStateManage3 from './components/GlobalStateManage3';
import FetchingDataUseReducer from './components/FetchingDataUseReducer';
import FetchingDataUseReducer2 from './components/FetchingDataUseReducer2';
import UseCallBackHook from './components/UseCallBackHook';
import UseCallBackHook2 from './components/UseCallBackHook2';
import UseMemoHooks from './components/UseMemoHooks';
import UseRefHook from './components/UseRefHook';
import UseRefHook2 from './components/UseRefHook2';
import CustomHooks2 from './components/CustomHooks2';
import CustomHooks3 from './components/CustomHooks3';
import CustomHooks4 from './components/CustomHooks4';
import CustomHooks5 from './components/CustomHooks5';
import Practise from './components/Practise';
import { UseStateObjects } from './components/UseStateObjects';
import { UseStateArrays } from './components/UseStateArrays';
import UnnecessaryRenders from './components/UnnecessaryRenders';
import UnnecessaryRenders2 from './components/UnnecessaryRenders2';
import { ReactMemos1 } from './components/ReactMemos1';
import ReactmemosvsUseMemo from './components/ReactmemosvsUseMemo';
import ContextAndSameReference from './components/ContextAndSameReference';
import { ContextAndSameReference2 } from './components/ContextAndSameReference2';

export const hookVariable=React.createContext()
export const contextVal=React.createContext()

//for GlobalStateManage1 files
// const initialState=0
// const reducerFunction=(state,action)=>{   //state is initialState in line 3
//     switch(action){
//         case 'increment':return state+1
//         case 'decrement':return state-1
//         case 'reset':return 0
//         default : return state  //returned state is newState in line 15

//     }
// }
// function App() {
//   const [newState, dispatcher]=useReducer(reducerFunction, initialState)
//   return (
    
//     <contextVal.Provider value={{newState1:newState, dispatcher1:dispatcher}}>
//       <div className="App">
//         {/* <HookUseState/> */}
//         {/* <HookUseStatePrevState/> */}
//         {/* <HookUseStateObject/> */}
//         {/* <HookUseStateObjectForms/> */}
//         {/* <HooksUseStateArray/> */}
//         {/* <HookUseEffect/> */}
//         {/* <HookUseEffectConditionally/> */}
//         {/* <HookUseEffectOnlyOnce/> */}
//         {/* <HookComponentUnmount/> */}
//         {/* <IntervalHookCounter/> */}
//         {/* <FetchingDataHooks/> */}

//         {/* always should be value={} but not any other */}
//         {/* <hookVariable.Provider value={'react'}>  
//         <UseContextHooks />
//       </hookVariable.Provider> */}
//         {/* <HookUseReducer/> */}
//         {/* <HookUseReducer2/> */}
//         {/* <MultipleUseReducers/> */}
//         count is {newState}
//         <GlobalStateManage1 />
//         <GlobalStateManage2 />
//         <GlobalStateManage3 />
//       </div>
//     </contextVal.Provider>
//   );
// }

function App() {
  return (
    
      <div className="App">
        {/* <HookUseState/> */}
        {/* <HookUseStatePrevState/> */}
        {/* <HookUseStateObject/> */}
        {/* <HookUseStateObjectForms/> */}
        {/* <HooksUseStateArray/> */}
        {/* <HookUseEffect/> */}
        {/* <HookUseEffectConditionally/> */}
        {/* <HookUseEffectOnlyOnce/> */}
        {/* <HookComponentUnmount/> */}
        {/* <IntervalHookCounter/> */}
        {/* <FetchingDataHooks/> */}

        {/* always should be value={} but not any other */}
        {/* <hookVariable.Provider value={'react'}>  
        <UseContextHooks />
      </hookVariable.Provider> */}
        <HookUseReducer/>
        {/* <HookUseReducer2/> */}
        {/* <MultipleUseReducers/> */}
       
        {/* <GlobalStateManage1 />
        <GlobalStateManage2 />
        <GlobalStateManage3 /> */}
        {/* <FetchingDataUseReducer/> */}
        {/* <FetchingDataUseReducer2/> */}
        {/* <UseCallBackHook/> */}
        {/* <UseCallBackHook2/> */}
        {/* <UseMemoHooks/> */}
        {/* <UseRefHook/> */}
        {/* <UseRefHook2/> */}
        {/* <CustomHooks2/>
        <CustomHooks3/> */}
        {/* <CustomHooks5/> */}
        {/* <Practise/> */}
        {/* <UseStateObjects/> */}
        {/* <UseStateArrays/> */}

        {/* not effective */}
        {/* <UnnecessaryRenders/>  */}
        {/* effective */}
        {/* <UnnecessaryRenders>
          <UnnecessaryRenders2/>
        </UnnecessaryRenders> */}

        {/* <ReactMemos1/> */}
        {/* <ReactmemosvsUseMemo/> */}
        {/* <ContextAndSameReference>
          <ContextAndSameReference2/>
        </ContextAndSameReference> */}
      </div>
  );
}

export default App;

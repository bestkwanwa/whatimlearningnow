import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import login from '../../store/action/login';
 function IndexPage(props){
     const dispatch=useDispatch()
     const state=useSelector(state=>state)
    return (
        <div>
            <h1>IndexPage</h1>
        <button onClick={()=>{
            // test
            dispatch(login())
        }}>click</button>
        </div>
    )
}

export default IndexPage
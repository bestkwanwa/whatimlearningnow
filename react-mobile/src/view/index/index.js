import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tab from '../../common/component/Tab';
import '../../common/css/index.css';
let imgData=[
    require('../../common/images/tab/img1.png'),
    require('../../common/images/tab/img2.png'),
    require('../../common/images/tab/img3.png'),
    require('../../common/images/tab/img4.png'),
]
 function IndexPage(props){
     const dispatch=useDispatch()
     const state=useSelector(state=>state)
    return (
        <div>
            <Tab 
            data={imgData}
            render={(data)=>{
                return <img src={data} />
            }}
            ></Tab>
        </div>
    )
}

export default IndexPage
import React, { useEffect, useState } from 'react';
import Tab from '../../common/component/Tab';
import Course from './course';
import Vip from './vip';
import Miaov from './miaov';
import Frame from '../../common/component/Frame';
import Works from './works';
import useWorks from '../../store/action/works';
import '../../common/css/index.css';
let imgData = [
    require('../../common/images/tab/img1.png'),
    require('../../common/images/tab/img2.png'),
    require('../../common/images/tab/img3.png'),
    require('../../common/images/tab/img4.png'),
]
function IndexPage() {
    let [page,setPage]=useState(1)
    const getWorks=useWorks()
    function getWorksData(){
        let promise=getWorks(page)
        setPage(++page)
        return promise
    }
    useEffect(()=>{
        getWorksData()
    },[])
    return (
        <Frame pullUp={true} getWorksData={getWorksData}>
            <div>
                <Tab
                    data={imgData}
                    render={(data) => {
                        return <img alt='carousel' src={data} />
                    }}
                ></Tab>
                <section className="index_content">
                    <Course />
                    <Vip />
                    <Miaov />
                    <Works page={page} />
                </section>
            </div>

        </Frame>
    )
}

export default IndexPage
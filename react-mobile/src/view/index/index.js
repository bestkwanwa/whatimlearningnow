import React, { useEffect, useState } from 'react';
import Tab from '../../common/component/Tab';
import Course from './course';
import Vip from './vip';
import Miaov from './miaov';
import Frame from '../../common/component/Frame';
import Works from './works';
import useWorks from '../../store/action/works';
import '../../common/css/index.css';
import { useSelector } from 'react-redux';
let imgData = [
    require('../../common/images/tab/img1.png'),
    require('../../common/images/tab/img2.png'),
    require('../../common/images/tab/img3.png'),
    require('../../common/images/tab/img4.png'),
]
function IndexPage() {
    console.log('index render');
    let works = useSelector(state => state.works)
    // 为什么这里不能直接使用works.page去action发请求，works.page为什么不更新
    let [page,setPage]=useState(works.page)
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
                    <Works />
                </section>
            </div>

        </Frame>
    )
}

export default IndexPage
import React, { useEffect } from 'react';
import Tab from '../../common/component/Tab';
import Course from './course';
import Vip from './vip';
import Miaov from './miaov';
import Frame from '../../common/component/Frame';
import Works from './works';
import '../../common/css/index.css';
let imgData = [
    require('../../common/images/tab/img1.png'),
    require('../../common/images/tab/img2.png'),
    require('../../common/images/tab/img3.png'),
    require('../../common/images/tab/img4.png'),
]
function IndexPage(props) {
    return (
        <Frame>

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
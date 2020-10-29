import React, { Fragment } from 'react';
import IndexNav from './indexNav';
import TopicList from '../../component/TopicList';
export default function IndexPage(props) {
    let { username } = props
    return (
        <Fragment>
            <IndexNav></IndexNav>
            <TopicList
                data={[]}
                loading={true}
            ></TopicList>
        </Fragment>
        
    )
}
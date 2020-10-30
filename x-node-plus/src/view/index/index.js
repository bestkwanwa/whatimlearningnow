import React, { Fragment, useEffect } from 'react';
import IndexNav from './indexNav';
import TopicList from '../../component/TopicList';
import { useSelector } from 'react-redux';
import { useTopicsList } from '../../store/action';
import qs from 'qs';
import { useLocation } from 'react-router-dom';
export default function IndexPage(props) {
    let { loading, data } = useSelector(state => state.topics)
    let getData = useTopicsList()
    let { search } = useLocation()
    let {tab,page}=qs.parse(search.substring(1))
    useEffect(() => {
        console.log('effect');
        getData(tab,page)
    }, [tab,page])
    return (
        <Fragment>
            <IndexNav></IndexNav>
            <TopicList
                data={data}
                loading={loading}
            ></TopicList>
        </Fragment>

    )
}
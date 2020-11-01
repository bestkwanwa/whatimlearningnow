import React, { Fragment, useEffect } from 'react';
import IndexNav from './indexNav';
import IndexPagination from './indexPagination';
import TopicList from '../../component/TopicList';
import { useSelector } from 'react-redux';
import { useTopicsList } from '../../store/action';
import qs from 'qs';
import { useLocation } from 'react-router-dom';
export default function IndexPage(props) {
    let { loading, data } = useSelector(state => state.topics)
    let getData = useTopicsList()
    let { search } = useLocation()
    let { tab = 'all', page = 1 } = qs.parse(search.substring(1))
    useEffect(() => {
        console.log('effect');
        getData(tab, page)
    }, [tab, page])
    return (
        <div style={{ marginTop: 10 }}>
            <IndexNav></IndexNav>
            <TopicList
                data={data}
                loading={loading}
            ></TopicList>
            <IndexPagination></IndexPagination>
        </div>
    )
}
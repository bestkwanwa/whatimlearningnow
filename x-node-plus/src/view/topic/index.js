import React, { useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { useTopic } from '../../store/action';
import { Alert } from 'antd';
import Details from './details';
export default function TopicPage() {
    let history = useHistory()
    let { id } = useParams()
    let getData = useTopic()
    let { loading, data, isError, err_msg } = useSelector(status => status.topic)
    useEffect(() => {
        getData(id)
    }, [id])
    return (
        <div id='topic'>
            {isError ? <Alert
                closable
                type={'error'}
                message={'请求出错'}
                description={
                    <Fragment>
                        <p>{err_msg}</p>
                        <p>点击关闭按钮返回上一页</p>
                    </Fragment>
                }
                afterClose={() => {
                    history.goBack()
                }}
            ></Alert> : <Fragment>
                    <Details
                        loading={loading}
                        data={data}
                    ></Details>
                </Fragment>}
        </div>
    )
}
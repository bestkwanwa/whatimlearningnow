import React, { Fragment } from 'react';
import { Card } from 'antd';
import TopicTag from '../../component/TopicTag';
import { Link } from 'react-router-dom';
import FromNow from '../../component/FromNow';
export default function Details(props) {
    let { loading, data } = props
    let { author, content, create_at, good, top, tab, title, visit_count } = data
    return (
        <Card
            bordered
            loading={loading}
            // title 不会 loading ,会一开始就显示
            title={
                <Fragment>
                    <h1><TopicTag tab={top ? 'top' : (good ? 'good' : tab)}></TopicTag>{title}</h1>
                    <p>- 作者：<Link to={`/user/${author.loginname}`}>{author.loginname}</Link>
            - 创建时间：<FromNow date={create_at}></FromNow> - 浏览人数：{visit_count}</p>
                </Fragment>
            }
            type='inner'
        >
            <div
                dangerouslySetInnerHTML={{
                    __html: content
                }}
            >
            </div>

        </Card>
    )
}
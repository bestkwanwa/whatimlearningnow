import React from 'react';
import { List, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import TopicTag from './TopicTag';
export default function TopicList(props) {
    let { loading, data } = props
    return (
        <List
            className='topic_list'
            loading={loading}
            dataSource={data}
            renderItem={(data) => {
                console.log('===render item===', data);
                let { author, last_reply_at, good, top, tab, title, id } = data
                let { loginname, avatar_url } = author
                return <List.Item>
                    <Col xs={24} md={22}>
                        <Link to={`/user/${loginname}`}>
                            <Avatar title={loginname} src={avatar_url} icon={<UserOutlined />}></Avatar>
                        </Link>
                        <TopicTag tab={top ? "top" : (good ? "good" : tab)}>
                        </TopicTag>
                        <Link to={`/topics/${id}`}>{title}</Link>
                    </Col>
                    <Col xs={0} md={2}>日期时间</Col>
                </List.Item>
            }}
        ></List>
    )
}
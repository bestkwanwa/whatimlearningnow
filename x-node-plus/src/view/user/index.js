import React, { useEffect } from 'react';
import { Avatar, Card } from 'antd';
import {UserOutlined} from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { useUser } from '../../store/action';
import { useSelector } from 'react-redux';
import TopicList from '../../component/TopicList';
import FromNow from '../../component/FromNow';
export default function UserPage() {
    let { loading, data } = useSelector(status => status.user)
    let { recent_topics = [], recent_replies = [], avatar_url, githubUsername, create_at, score } = data
    let { loginname } = useParams()
    let getData = useUser()
    useEffect(() => {
        getData(loginname)
    }, [loginname])
    console.log('user', data);
    return (
        <div className='user-page'>
            <h1 style={{textAlign:'center'}}>用户示例数据</h1>
            <Card
                loading={loading}
                className='user-details'
            >
                <Avatar
                    size={80}
                    icon={<UserOutlined />}
                    src={avatar_url}
                >
                </Avatar>
                <p style={{ marginTop: 20 }}>
                    用户名：{loginname}
                        注册时间：{<FromNow date={create_at}></FromNow>}
                        积分：{score}
                </p>
                <p>github: <a target={'_blank'} href={`https://github.com/${githubUsername}`}>github: https://github.com/${githubUsername}</a></p>
            </Card>
            <Card
                loading={loading}
                title={'最近创建的话题'}
                type={'inner'}
            >
                <TopicList loading={loading} data={recent_topics}></TopicList>
            </Card>
            <Card
                loading={loading}
                title={'最近参与的话题'}
                type='inner'
            >
                <TopicList loading={loading} data={recent_replies}></TopicList>
            </Card>
        </div>
    )
}
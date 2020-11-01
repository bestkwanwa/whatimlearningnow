import React from 'react';
import { Avatar, Card, Comment, List } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import FromNow from '../../component/FromNow';
import { Link } from 'react-router-dom';
export default function Replies(props) {
    let { data, loading } = props
    return (
        <Card
            title={'评论列表'}
            loading={loading}
            type={'inner'}
        >
            <List
                pagination={true}
                dataSource={data}
                renderItem={(item) => {
                    let { author, content, create_at } = item
                    return <List.Item>
                        <Comment
                            datetime={<time>发布于：{<FromNow date={create_at}></FromNow>}</time>}
                            // 因为
                            author={<Link to={`/user/${author.loginname}`}>{author.loginname}</Link>}
                            avatar={<Avatar
                                icon={<UserOutlined></UserOutlined>}
                                src={author.avatar_url}
                                title={author.loginname}
                            >
                            </Avatar>}
                            content={
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: content
                                    }}
                                ></div>
                            }
                        ></Comment>
                    </List.Item>
                }}
            ></List>
        </Card>
    )
}
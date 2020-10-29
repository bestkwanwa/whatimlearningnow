import React from 'react';
import { List } from 'antd';
export default function TopicList(props) {
    let {loading,data}=props
    return (
        <List
            className='topic_list'
            loading={loading}
            dataSource={data}
            renderItem={(data) => {
                return <List.Item>{data}</List.Item>
            }}
        ></List>
    )
}
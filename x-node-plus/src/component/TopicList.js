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
                // console.log('===render item===',data);
                return <List.Item>{1}</List.Item>
            }}
        ></List>
    )
}
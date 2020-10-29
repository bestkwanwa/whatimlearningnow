import React from 'react';
import { subNavs,types } from '../../router';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import qs from 'qs';
export default function IndexNav() {
    // 路由表返回此组件时：1、search为空 2、合法
    let {search}=useLocation()
    let {tab}=qs.parse(search.substring(1))
    let activeIndex=types.findIndex(item=>item===tab)
    activeIndex=activeIndex===-1?0:activeIndex
    return (
        <Menu mode='horizontal' selectedKeys={[activeIndex+'']}>
            {subNavs.map((item, index) => {
                return <Menu.Item key={index}>
                    <Link to={item.to}>{item.title}</Link>
                </Menu.Item>
            })}
        </Menu>
    )
}
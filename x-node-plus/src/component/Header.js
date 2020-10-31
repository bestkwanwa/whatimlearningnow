import React from 'react';
import { Affix, Col, Layout, Menu, Row } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { navs } from '../router';
export default function Header() {
    let { pathname } = useLocation()
    // 当前选中 Menu.item 的索引
    let activeIndex = navs.findIndex(item => pathname === item.to)
    return (
        <Affix offsetTop={0}>
            <Layout.Header id='header'>
                <div className='wrap'>
                    <Row>
                        <Col xs={6} sm={4} md={2}>
                            <h1 className='logo'>
                                <Link to={'/'}>XNode</Link>
                            </h1>
                        </Col>
                        <Col xs={18} sm={20} md={22}>
                            {/* selectedKeys 接收字符串数组 */}
                            <Menu mode='horizontal' theme='dark' selectedKeys={[activeIndex + '']}>
                                {navs.map((item, index) => {
                                    return <Menu.Item key={index}>
                                        <Link to={item.to}>{item.title}</Link>
                                    </Menu.Item>
                                })}
                            </Menu>
                        </Col>
                    </Row>
                </div>
            </Layout.Header>
        </Affix>

    )
}
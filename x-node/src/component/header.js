import React from 'react';
import { Col, Layout, Row } from 'antd';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { navs } from '../router';
export default function Header() {
    return (
        <Layout.Header>
            <div className='wrap'>
                <Row>
                    <Col span={4}>
                        <h1 id='logo'><Link to={'/'}>XNode</Link></h1>
                    </Col>
                    <Col span={20}>
                        <Nav
                            data={navs}
                            theme='dark'
                            selected={({pathname}) => {
                                let key = navs.findIndex(item => {
                                    if (pathname === item.to) {
                                        return true
                                    }
                                    return false
                                })
                                // 转字符串
                                return key + ''
                            }}
                        ></Nav>
                    </Col>
                </Row>
            </div>
        </Layout.Header >
    )

}
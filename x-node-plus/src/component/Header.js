import React from 'react';
import { Affix, Col, Layout, Menu, Row } from 'antd';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        // <Affix offsetTop={0}>
        <Layout.Header id='header'>
            <div className='wrap'>
                <Row>
                    <Col xs={6} sm={4} md={2}>
                        <h1 className='logo'>
                            <Link to={'/'}>logo</Link>
                        </h1>
                    </Col>
                    <Col xs={18} sm={20} md={22}>
                        <Menu mode='horizontal' theme='dark'>
                            <Menu.Item>首页</Menu.Item>
                            <Menu.Item>首页</Menu.Item>
                            <Menu.Item>首页</Menu.Item>
                            <Menu.Item>首页</Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </div>
        </Layout.Header>
        // </Affix>

    )
}
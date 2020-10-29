import React from 'react';
import { Affix, Layout } from 'antd';
export default function Header() {
    return (
        // <Affix offsetTop={0}>
            <Layout.Header>
                <div className='wrap'>
                    <p style={{ color: "white" }}>header</p>
                </div>
            </Layout.Header>
        // </Affix>

    )
}
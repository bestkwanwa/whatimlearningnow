import React from 'react';
import IndexPage from '../view/index/index';
import NotFoundPage from '../view/notfound/index';

// list of route
const routes = [
    {
        path: '/',
        exact: true,
        render(props) {
            return <IndexPage {...props}></IndexPage>
        }
    },
    {
        path: '',
        exact: true,
        render(props) {
            return <NotFoundPage {...props}></NotFoundPage>
        }
    }
]

// list of nav
const navs = [
    {
        title: "首页",
        to: "/"
    }, {
        title: "新手入门",
        to: "/getstart"
    }, {
        title: "API",
        to: "/api"
    }, {
        title: "关于",
        to: "/about"
    }
];

// list of index nav
const indexNavs = [
    {
        title: "全部",
        to: "/?tab=all"
    }, {
        title: "精华",
        to: "/?tab=good"
    }, {
        title: "分享",
        to: "/?tab=share"
    }, {
        title: "问答",
        to: "/?tab=ask"
    }, {
        title: "招聘",
        to: "/?tab=job"
    }, {
        title: "客户端测试",
        to: "/?tab=dev"
    }
]

export { routes,navs,indexNavs }


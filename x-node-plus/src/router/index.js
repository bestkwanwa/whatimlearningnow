import React from 'react';
import IndexPage from '../view/index';
import TopicPage from '../view/topic';
import AboutPage from '../view/about';
import GetStartPage from '../view/getstart';
import NotFoundPage from '../view/notfound';
import UserPage from '../view/user';

// 处理search
import qs from 'qs';

// 与子路由表顺序保持一致
const types = ['all', 'good', 'share', 'ask', 'job', 'dev']

// 路由表
const routes = [
    {
        path: '/',
        exact: true,
        render(props) {
            let { location } = props
            let { search } = location
            let { tab, page } = qs.parse(search.substring(1))
            // 当search为空时 或者 当tab为types之一（page可以不存在，若存在，则必须大于0）
            if (
                (tab === undefined && page === undefined)
                ||
                (types.includes(tab) && (page === undefined || page > 0))
            ) {
                return <IndexPage {...props}></IndexPage>
            }
            return <NotFoundPage></NotFoundPage>
        }
    },
    {
        path: '/topic/:id',
        exact: true,
        render(props) {
            return <TopicPage {...props}></TopicPage>
        }
    },
    {
        path: '/user/:loginname',
        exact: true,
        render(props) {
            return <UserPage {...props}></UserPage>
        }
    },
    {
        path: '/getstart',
        exact: true,
        render(props) {
            return <GetStartPage {...props}></GetStartPage>
        }
    },
    {
        path: '/about',
        exact: true,
        render(props) {
            return <AboutPage {...props}></AboutPage>
        }
    },
    {
        path: '',
        exact: false,
        render(props) {
            return <NotFoundPage {...props}></NotFoundPage>
        }
    },
]

// 首页导航表
const navs = [
    {
        to: '/',
        title: '首页',
    },
    {
        to: '/getstart',
        title: '新手入门',
    },
    {
        to: '/about',
        title: '关于我们',
    },
]

// 首页子导航表
const subNavs = [
    {
        title: '全部',
        to: '/?tab=all'
    },
    {
        title: '精华',
        to: '/?tab=good'
    },
    {
        title: '分享',
        to: '/?tab=share'
    },
    {
        title: '问答',
        to: '/?tab=ask'
    },
    {
        title: '招聘',
        to: '/?tab=job'
    },
    {
        title: '客户端测试',
        to: '/?tab=dev'
    },
]

export { routes, navs, subNavs, types }
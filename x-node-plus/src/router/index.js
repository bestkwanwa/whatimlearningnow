import React from 'react';
import IndexPage from '../view/index';
import TopicPage from '../view/topic';
import AboutPage from '../view/about';
import GetStartPage from '../view/getstart';
import NotFoundPage from '../view/notfound';
import UserPage from '../view/user';

// 路由表
const routes=[
    {
        path:'/',
        exact:true,
        render(props){
            return <IndexPage {...props}></IndexPage>
        }
    },
    {
        path:'/topics/:id',
        exact:true,
        render(props){
            return <TopicPage {...props}></TopicPage>
        }
    },
    {
        path:'/user/:username',
        exact:true,
        render(props){
            return <UserPage {...props}></UserPage>
        }
    },
    {
        path:'/getstart',
        exact:true,
        render(props){
            return <GetStartPage {...props}></GetStartPage>
        }
    },
    {
        path:'/about',
        exact:true,
        render(props){
            return <AboutPage {...props}></AboutPage>
        }
    },
    {
        path:'',
        exact:false,
        render(props){
            return <NotFoundPage {...props}></NotFoundPage>
        }
    },
]

export {routes}
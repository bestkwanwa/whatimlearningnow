import React from 'react';
import IndexPage from '../view/index';
import CoursePage from '../view/course';
import LecturerPage from '../view/lecturer';
import WorkPage from '../view/work';
import LoginPage from '../view/login';
const routeList=[
    {
        name:'首页',
        path:'/',
        exact:true,
        render(props){
            return <IndexPage {...props}></IndexPage>
        }
    },
    {
        name:'课程安排',
        path:'/course',
        exact:true,
        render(props){
            return <CoursePage {...props}></CoursePage>
        }
    },
    {
        name:'讲师团队',
        path:'/lecturer',
        exact:true,
        render(props){
            return <LecturerPage {...props}></LecturerPage>
        }
    },
    {
        name:'作品详情',
        path:'/work',
        exact:true,
        render(props){
            return <WorkPage {...props}></WorkPage>
        }
    },
    {
        name:'登录注册',
        path:'/login',
        exact:true,
        render(props){
            return <LoginPage {...props}></LoginPage>
        }
    },
] 

export default routeList
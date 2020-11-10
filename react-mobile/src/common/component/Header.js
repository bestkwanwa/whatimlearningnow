import React from 'react';
import http from '../../store/action/http';
import { Link, useLocation } from 'react-router-dom';
import { useBack } from '../../common/hooks';
import { useSelector } from 'react-redux';
export default function Header() {
    // test request
    // http.post('/lecturer/lists?page=1&rows=20', {
    //     order:'desc',
    //     sort:'id',
    //     category_id:1,
    //     recommend:1,
    // }).then(res=>{
    //     console.log(res);
    // })
    const location = useLocation()
    const goBack = useBack()
    const user = useSelector(state => state.getUser)
    // console.log('state',user);
    function loginState() {
        if (location.pathname === '/login') {
            return ''
        }
        if (user) {
            return <span className='header-btn-right header-user'>{user}</span>
        }
        return <Link className='user' to='/login'></Link>
    }
    return (
        <header id="header">
            <nav className="menu">
                {location.pathname === '/login' ?
                    <a
                        className='header-btn-left iconfont icon-back'
                        onClick={goBack}
                    ></a> :
                    <a className="header-btn-left iconfont icon-hycaidan"></a>
                }
            </nav>
            <h1 className="logo">miaov.com</h1>
            {loginState()}
        </header>
    )
}
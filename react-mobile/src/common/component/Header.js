import React, { useEffect, useState } from 'react';
import http from '../../store/action/http';
import { Link, useLocation } from 'react-router-dom';
import { useBack } from '../../common/hooks';
import { useDispatch, useSelector } from 'react-redux';
import useIsLogin from '../../store/action/islogin';
import useLogout from '../../store/action/logout';
export default function Header() {
    const location = useLocation()
    const goBack = useBack()
    const user = useSelector(state => state.getUser)
    const isLogin = useIsLogin()
    const [btnShow, setBtnShow] = useState(false)
    const  dispatch=useDispatch()
    const logout=useLogout()
    useEffect(() => {
        isLogin()
    }, [!user.length])
    function loginState() {
        if (location.pathname === '/login') {
            return ''
        }
        if (user) {
            return <span className='header-btn-right'>
                <span
                    className='header-user'
                    onClick={() => {
                        setBtnShow(!btnShow)
                    }}
                >{user}</span>
                <span
                    className='header-logout-btn'
                    style={{
                        display:btnShow?'block':'none'
                    }}
                    onClick={logout}
                >退出</span>
            </span>
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
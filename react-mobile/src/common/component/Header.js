import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useBack } from '../../common/hooks';
import { useSelector } from 'react-redux';
import useIsLogin from '../../store/action/islogin';
import useLogout from '../../store/action/logout';
export default function Header(props) {
    const location = useLocation()
    const goBack = useBack()
    const user = useSelector(state => state.getUser)
    const isLogin = useIsLogin()
    const [btnShow, setBtnShow] = useState(false)
    // const  dispatch=useDispatch()
    const logout=useLogout()
    const {changeMenuState}=props
    useEffect(() => {
        isLogin()
    }, [user.length,isLogin])
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
            <nav className="menu"
                onClick={changeMenuState}
            >
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
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useLogin from '../../store/action/login';
import { useBack } from '../../common/hooks';
export default function Login(props) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [verCode, setVerCode] = useState('')
    const [verCodeShow, setVerCodeShow] = useState(false)
    const [verCodeSrc, setVerCodeSrc] = useState(`/miaov/user/verify?${Date.now()}`)
    const dispatch = useDispatch()
    const goBack = useBack()
    const { setDeg } = props
    const login = useLogin(
        {
            verify: verCode,
            username: userName,
            password
        }
    )
    function toLogin() {
        dispatch(
            login
        ).then(data => {
            console.log(data);
            if (data.code !== 0) {
                // 登录失败，重新请求验证码
                setVerCodeSrc(`/miaov/user/verify?${Date.now()}`)
            } else {
                // 登录成功
                goBack()
            }
        })
    }
    // 组件受控后，每次change都会执行一遍
    // console.log('typing');
    return (
        <div className="login_box">
            <figure className="user_img">
                <img alt="" src={require('../../common/images/user_img.png')} />
                <figcaption>如有账号，请直接登录</figcaption>
            </figure>
            <div className="login_form">
                <p>
                    <input
                        type="text"
                        placeholder="用户名"
                        value={userName}
                        onChange={e => {
                            setUserName(e.target.value)
                        }}
                    />

                </p>
                <p>
                    <input
                        type="password"
                        placeholder="请输入密码"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                </p>
                <p className='clearfix'>
                    <input
                        style={{ width: '3rem', float: 'left' }}
                        type="text"
                        placeholder="请输入验证码"
                        value={verCode}
                        onChange={e => {
                            setVerCode(e.target.value)
                        }}
                        onFocus={() => {
                            console.log('focus');
                            setVerCodeShow(true)
                        }}
                    />
                    {verCodeShow ?
                        <img
                            style={{ width: '3.5rem', float: 'right' }}
                            src={verCodeSrc}
                            onClick={() => {
                                // 带上时间戳是为了防止缓存
                                setVerCodeSrc(`/miaov/user/verify?${Date.now()}`)
                            }}
                        /> : ''}
                </p>

                <button
                    className="form_btn"
                    onClick={toLogin}
                >登录</button>
                <p className="form_tip">没有帐号？<a onClick={() => { setDeg(-180) }}>立即注册</a></p>
            </div>
        </div>
    )
}
import React, { useState } from 'react';

export default function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [verCode, setVerCode] = useState('')
    const [verCodeShow, setVerCodeShow] = useState(false)
    const [verCodeSrc, setVerCodeSrc] = useState(`/miaov/user/verify?${Date.now()}`)
    return (
        <div className="login_box">
            <figure className="user_img">
                <img src="../images/user_img.png" alt="" />
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
                    style={{width:'3rem',float:'left'}}
                        type="text"
                        placeholder="请输入验证码"
                        value={verCode}
                        onChange={e => {
                            setVerCode(e.target.value)
                        }}
                        onFocus={()=>{
                            console.log('focus');
                            setVerCodeShow(true)
                        }}
                    />
                    {verCodeShow?<img style={{width:'3.5rem',float:'right'}} src={verCodeSrc} />:''}
                </p>

                <button className="form_btn">登录</button>
                <p className="form_tip">没有帐号？<a href="#">立即注册</a></p>
            </div>
        </div>
    )
}
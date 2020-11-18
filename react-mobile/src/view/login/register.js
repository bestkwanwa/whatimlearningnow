import React, { useState } from 'react';
import useRegister from '../../store/action/register';
export default function Register(props) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [vcode, setVcode] = useState("");
    const [vcodeShow, setVcodeShow] = useState(false);
    const [vcodeSrc, setVcodeSrc] = useState("/miaov/user/verify?" + Date.now());
    const { setDeg } = props;
    let point = {};
    const register = useRegister(
        {
            verify: vcode,
            username: user,
            password,
            repassword: password2
        }
    )
    function toRegister() {
        register().then(data => {
            console.log('register info', data);
            if (data.code === 0) {
                // 注册成功，返回登录页
                setDeg(0)
            }
            setVcodeSrc("/miaov/user/verify?" + Date.now())
        })
    }
    return (
        <div className="register_box">
            <h3>注册账号</h3>
            <div className="register_form">
                <p>
                    <input
                        type="text"
                        placeholder="用户名"
                        value={user}
                        onChange={e => {
                            setUser(e.target.value)
                        }}
                    />
                </p>
                <p>
                    <input
                        type="password"
                        placeholder="请输入密码"
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                    />
                </p>
                <p>
                    <input
                        type="password"
                        placeholder="请确认密码"
                        value={password2}
                        onChange={e => {
                            setPassword2(e.target.value);
                        }}
                    />
                </p>
                <p className="clearfix">
                    <input
                        style={{ width: '3rem', float: 'left' }}
                        type="text"
                        placeholder="请输入验证码"
                        value={vcode}
                        onChange={e => {
                            setVcode(e.target.value);
                        }}
                        onFocus={() => {
                            setVcodeShow(true);
                        }}
                        className="verifyCode"
                    />
                    {vcodeShow ?
                        <img
                            alt='verifycode'
                            style={{ width: '3.5rem', float: 'right' }}
                            className="verify"
                            src={vcodeSrc}
                            onTouchStart={(e) => {
                                let touch = e.changedTouches[0];
                                point.x = touch.pageX;
                                point.y = touch.pageY;
                            }}
                            onTouchEnd={(e) => {
                                let touch = e.changedTouches[0];
                                let nowPoint = {
                                    x: touch.pageX,
                                    y: touch.pageY
                                };
                                if (Math.abs(nowPoint.x - point.x) < 5
                                    && Math.abs(nowPoint.y - point.y) < 5) {
                                    setVcodeSrc("/miaov/user/verify?" + Date.now())
                                }
                            }} /> : ""}

                </p>
                <button
                    className="form_btn"
                    onClick={toRegister}
                >马上注册</button>
                <p className="form_tip">已有帐号？<a
                    onClick={() => {
                        setDeg(0)
                    }}
                >立即登录</a></p>
            </div>
        </div>
    );
}

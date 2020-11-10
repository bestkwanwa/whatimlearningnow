import React, { useState } from 'react';
import Login from './login';
import Register from './register';
import '../../common/css/login.css';
export default function LoginPage() {
    const [deg, setDeg] = useState(0)
    return (
        <div id="login_boxWrap">
            <h2 className="login_register"><span>登录&注册</span></h2>
            <div className="login_register_box">
                <div className="box" style={{
                    transform:`rotateY(${deg}deg)`
                }}>
                    <Login setDeg={setDeg}></Login>
                    <Register setDeg={setDeg}></Register>
                </div>
            </div>
        </div>
    )
}
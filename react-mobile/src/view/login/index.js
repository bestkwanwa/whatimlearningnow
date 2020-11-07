import React, { useState } from 'react';
import Login from './login';
import '../../common/css/login.css';
export default function LoginPage() {
   
    return (
        <div id="login_boxWrap">
            <h2 className="login_register"><span>登录&注册</span></h2>
            <div className="login_register_box">
                <div className="box">
                    <Login></Login>
                </div>
            </div>
        </div>
    )
}
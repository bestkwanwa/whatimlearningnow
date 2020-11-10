
import http from './http';
import { useDispatch } from 'react-redux';

export default function useIsLogin() {
    const dispatch = useDispatch()
    return function () {
        // 返回一个promise
        return http.post('/user/islogin').then(res => {
            if(res.data.code===0){
                // 登录成功
                dispatch({
                    type:'LOGIN',
                    user:res.data.username
                })
            }
        })
    }
}
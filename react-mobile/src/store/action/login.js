
import http from './http';
import { useDispatch } from 'react-redux';

export default function useLogin(data) {
    const dispatch = useDispatch()
    return function () {
        console.log('data', data);
        // 返回一个promise
        return http.post('/user/login', data).then(res => {
            // console.log('res', res);
            if (res.data.code === 0) {
                console.log('success');
                dispatch({
                    type:'LOGIN',
                    user:data.username
                })
            }
            return res.data
        })
    }
}
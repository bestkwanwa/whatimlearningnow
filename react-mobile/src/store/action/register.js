import http from './http';
// import { useDispatch } from 'react-redux';

export default function useRegister(data) {
    // const dispatch = useDispatch()
    return function () {
        return http.post('/user/register', data).then(res => {
            // console.log('res', res);
            if (res.data.code === 0) {
                console.log('register');
            }
            return res.data
        })
    }
}
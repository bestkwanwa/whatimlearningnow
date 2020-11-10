
import http from './http';
import { useDispatch } from 'react-redux';

export default function useLogout() {
    const dispatch = useDispatch()
    return function () {
        return http.post('/user/logout').then(res => {
           if(res.data.code===0){
               dispatch({
                   type:'LOGOUT'
               })
           }
        })
    }
}
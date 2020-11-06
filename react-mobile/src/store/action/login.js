import http from './http';
export default function login(data){
    return function(dispatch){
        http.post('/user/login').then(res=>{
            console.log(res);
        })
    }
}
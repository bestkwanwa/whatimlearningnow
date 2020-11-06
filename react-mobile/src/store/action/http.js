import axios from 'axios';
import qs from 'qs';
const http=axios.create({
    baseURL:'/miaov',
    withCredentials:true,
    // 请求拦截器
    transformRequest:(data)=>{
        // 编码
        return qs.stringify(data)
    }
})

export default http
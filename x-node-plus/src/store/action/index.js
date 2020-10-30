//

import axios from 'axios';
import { useDispatch } from 'react-redux';

// http://static2.cnodejs.org/api/v1/topics
const http = axios.create({
    baseURL: "http://static2.cnodejs.org/api/v1"
})

// 获取topics
// function useTopicsList() {
//     let dispatch = useDispatch()
//     return function (tab = 'all', page = 1, limit = 20, mdrender = true) {
//         dispatch({
//             type: 'topics_loading',

//         })
//         http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then((res) => {
//             // 在这里进行数据筛选
//             console.log(res);
//             dispatch({
//                 type: 'topics_loadover',
//                 data: res.data.data
//             })
//         })
//     }
// }

// 在自定义hooks中使用其他hooks
function useTopicsList() {
    let dispatch = useDispatch()
    return function (tab = 'all', page = 1, limit = 20, mdrender = true) {
        dispatch({
            type: 'topics_loading',

        })
        http.get(`/topics`).then((res) => {
            // 在这里进行数据筛选
            // console.log(res);
            console.log('good',res.data);
            let { data } = res.data
            console.log(data);
            let newData=data.filter(item => item.tab === tab||item.good===true)
            console.log('=====',newData);
            console.log('before dispatch', tab, page);
            dispatch({
                type: 'topics_loadover',
                data: res.data.data
            })
        })
    }
}

export { useTopicsList }
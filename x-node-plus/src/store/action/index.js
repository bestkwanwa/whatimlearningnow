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

const tabs = ['share', 'ask', 'job']
// 在自定义hooks中使用其他hooks
function useTopicsList() {
    let dispatch = useDispatch()
    return function (tab = 'all', page = 1, limit = 20, mdrender = true) {
        dispatch({
            type: 'topics_loading',

        })
        http.get(`/topics`).then((res) => {
            // 在这里进行数据筛选
            // console.log('good',res.data);
            let { data } = res.data
            // let newData=data.filter(item => item.tab === tab||item.good===true)
            let newData = []
            if (tabs.includes(tab)) {
                newData = data.filter(item => item.tab === tab)
            }else{
                newData=data
            }
            dispatch({
                type: 'topics_loadover',
                data: newData
            })
        })
    }
}

export { useTopicsList }
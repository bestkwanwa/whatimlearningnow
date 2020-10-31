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

// 获取topics
function useTopicsList() {
    // 在自定义hooks中使用其他hooks
    let dispatch = useDispatch()
    return function (tab = 'all', page = 1, limit = 10, mdrender = true) {
        dispatch({
            type: 'topics_loading',

        })
        http.get(`/topics`).then((res) => {
            // 在这里进行数据筛选
            let { data } = res.data
            // data=data.concat(data,data,data)
            let newData = []
            if (tabs.includes(tab)) {
                newData = data.filter(item => item.tab === tab)
            } else {
                newData = data
            }
            // 0-9 10-19
            let start = (page - 1) * limit
            let end = start + limit
            newData = newData.slice(start, end)
            console.log('new', newData);
            dispatch({
                type: 'topics_loadover',
                data: newData
            })
        })
    }
}

// 获取topic
function useTopic() {
    // 在自定义hooks中使用其他hooks
    let dispatch = useDispatch()
    return function (id) {
        dispatch({
            type: 'topic_loading',
        })
        // 因为 cnodejs 服务器问题，根据 id 未能取得数据，故先全部使用示例数据 http://static2.cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312
        console.log('lengh=', id.length);
        let example = '5433d5e4e737cbe96dcef312';
        http.get(`/topic/${id.length !== example.length ? id : example}`).then((res) => {
            // 在这里进行数据筛选
            let { data } = res.data
            dispatch({
                type: 'topic_loadover',
                data: data
            })
        }).catch((res) => {
            // 因服务器未能返回错误信息，这里也统一设置
            dispatch({
                type: 'topic_error',
                err_msg: '不是有效话题id'
            })
        })
    }
}


export { useTopicsList, useTopic }
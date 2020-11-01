//

import axios from 'axios';
import { useDispatch } from 'react-redux';

// http://static2.cnodejs.org/api/v1/topics
const http = axios.create({
    baseURL: "http://static2.cnodejs.org/api/v1"
})

const tabs = ['share', 'ask', 'job']

// 获取topics
function useTopicsList() {
    // 在自定义hooks中使用其他hooks
    let dispatch = useDispatch()
    return function (tab = 'all', page = 1, limit = 20, mdrender = true) {
        dispatch({
            type: 'topics_loading',
        })
        http.get(`/topics`).then((res) => {
            // 在这里进行数据筛选
            let { data } = res.data
            let newData = []
            if (tabs.includes(tab)) {
                newData = data.filter(item => item.tab === tab)
            } else {
                switch (tab) {
                    case 'good':
                        newData=data.filter(item=>item.good===true)
                        break;
                    case 'dev':
                        newData = []
                        break;
                    default:
                        newData = data
                        break;
                }
            }
            let start = (page - 1) * limit
            let end = start + limit
            newData = newData.slice(start, end)
            dispatch({
                type: 'topics_loadover',
                data: newData
            })
        })
    }
}

// 获取topic
function useTopic() {
    let dispatch = useDispatch()
    return function (id) {
        dispatch({
            type: 'topic_loading',
        })
        // 因为 cnodejs 服务器问题，根据 id 未能取得数据，故先全部使用示例数据 http://static2.cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312
        let example = '5433d5e4e737cbe96dcef312';
        http.get(`/topic/${id.length !== example.length ? id : example}`).then((res) => {
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

// 获取user 
function useUser() {
    let dispatch = useDispatch()
    return function (loginname) {
        dispatch({
            type: 'user_loading',
        })
        // 因为 cnodejs 服务器问题，根据 loginname 未能取得数据，故先全部使用示例数据 http://static2.cnodejs.org/api/v1/user/alsotang
        loginname = 'alsotang'
        http.get(`/user/${loginname}`).then((res) => {
            let { data } = res.data
            dispatch({
                type: 'user_loadover',
                data: data
            })
        }).catch((res) => {
            console.log('请求用户信息出错');
        })
    }
}


export { useTopicsList, useTopic, useUser }
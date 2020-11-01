export default function topic(topic = {
    loading: true,
    data: {
        // Card 组件的 title 属性可能会调用 author 的属性，若未请求到数据则会报错
        author: {}
    },
    isError: false,
    err_msg: ""
}, action) {
    switch (action.type) {
        case 'topic_loading':
            return {
                loading: true,
                data: { author: {} },
                isError: false,
                err_msg: ""
            }
        case 'topic_loadover':
            return {
                loading: false,
                data: action.data,
                isError: false,
                err_msg: ""
            }
        case 'topic_error':
            return {
                loading: false,
                data: { author: {} },
                isError: true,
                err_msg: action.err_msg
            }
        default:
            return topic
    }
}
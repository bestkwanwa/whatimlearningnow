export default function topic(topic = {
    loading: true,
    data: {},
    isError: false,
    err_msg: ""
}, action) {
    switch (action.type) {
        case 'topic_loading':
            return {
                loading: true,
                data: {},
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
                data: {},
                isError: true,
                err_msg: action.err_msg
            }
        default:
            return topic
    }
}
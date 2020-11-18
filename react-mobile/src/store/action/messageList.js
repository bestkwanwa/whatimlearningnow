import HTTP from "./http";
import { useDispatch } from 'react-redux';
export default function useMessageList() {
    const dispatch = useDispatch()
    // 这里的page在组件render时获取，为1。
    // const { page } = useSelector(state => state.messageList)    
    return function (id,page) {
        dispatch({
            type: "MESSAGE_LOAD"
        })
        return HTTP.post(`/lecturer/getcomment?page=${page}&rows=10`, {
            article_id: id
        }).then(res => {
            // console.log('msg list',res);
            if (!res.data.length) {
                console.log('real end');
                dispatch({
                    type: "MESSAGE_LOADEND"
                });
                return false;
            }
            dispatch({
                type: "MESSAGE_LOADOVER",
                messageList: res.data
            });
            return true;
        })
    }
}
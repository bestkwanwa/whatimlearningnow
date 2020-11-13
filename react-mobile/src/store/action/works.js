import HTTP from "./http";
import { useDispatch } from "react-redux";
export default function useWorks() {
    const dispatch = useDispatch()
    return function (page) {
        dispatch({
            type: "LOAD"
        })
        // let { page } = getState().works;
        console.log('request ',page);
        return HTTP.post(`/lecturer/lists?page=${page}&rows=8`, {
            order: "desc",
            sort: "sort",
            category_id: 1,
            recommend: 1
        }).then(res => {
            if (!res.data.length) {
                // 没有可请求的数据
                dispatch({
                    type: "LOADEND"
                });
                return false;
            }
            dispatch({
                type: "LOADOVER",
                data: res.data
            });
            return true;
        })
    }
}
import HTTP from "./http";
import { useDispatch } from 'react-redux';
function useGetGood() {
    const dispatch = useDispatch()
    return function (id) {
        return HTTP.post(`/lecturer/getgood`, {
            article_id: id
        }).then(res => {
            if (res.data.code == 0) {
                dispatch({
                    type: "GOOD",
                    goodid: res.data.gooid
                });
            } else {
                dispatch({
                    type: "CANCEL_GOOD"
                });
            }
        })
    }
}
function useSetGood() {
    const getGood = useGetGood()
    return function (id) {
        console.log('set good id ',id);
        return HTTP.post(`/lecturer/good`, {
            article_id: id
        }).then(res => {
            if (res.data.code == 0) {
                getGood(id);
                return true;
            }
        })
    }
}
function useCancelGood() {
    const dispatch = useDispatch()
    return function ({ id, goodid }) {
        console.log('cancel good obj',{id,goodid});
        return HTTP.post(`/lecturer/cancelgood`, {
            article_id: id,
            goodid
        }).then(res => {
            if (res.data.code == 0) {
                dispatch({
                    type: "CANCEL_GOOD"
                });
                return true;
            }
        })
    }
}

export { useGetGood, useSetGood, useCancelGood };
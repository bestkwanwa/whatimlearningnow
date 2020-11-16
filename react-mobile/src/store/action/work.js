import HTTP from "./http";
import { useDispatch } from 'react-redux';
export default function useWork(){
    const dispatch=useDispatch()
    return function(id){
       return HTTP.post(`/lecturer/info`,{
        article_id:id       
    }).then(res=>{
            dispatch({
                type: "WORK_LOADOVER",
                data: res.data
            });
        })
    }
}
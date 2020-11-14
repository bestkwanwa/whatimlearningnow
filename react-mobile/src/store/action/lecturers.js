import HTTP from "./http";
import { useDispatch } from 'react-redux';
export default function useLecturers(){
    const dispatch= useDispatch()
    return function(){
        dispatch({
            type: "LOAD"
        })
       return HTTP.post(`/lecturer/lists?page=1&rows=100`,{
        order:"desc",
        sort:"sort",
        category_id: 2      
    }).then(res=>{
            dispatch({
                type: "LOAD_LECTURERS",
                data: res.data
            });
        })
    }
}
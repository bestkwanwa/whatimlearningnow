import HTTP from "./http";
import { useDispatch } from 'react-redux';
export default function usePutMessage(){
    const dispatch=useDispatch()
    return function(info){
       return HTTP.post("/lecturer/addcomment",info).then(res=>{
            if(res.data.code != "0"){
                alert(res.data.message);
            }
            return true;
        })
    }
}
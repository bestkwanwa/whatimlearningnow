import HTTP from "./http";
export default function usePutMessage(){
    return function(info){
       return HTTP.post("/lecturer/addcomment",info).then(res=>{
            if(res.data.code !== 0){
                alert(res.data.message);
            }
            return true;
        })
    }
}
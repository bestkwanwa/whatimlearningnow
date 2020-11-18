import React,{useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import usePutMessage from "../../store/action/putMessage";
function Message(props){
    const putMessage=usePutMessage()
    const dispatch=useDispatch()
    const {getUser}=useSelector(state=>state)
    let {show,setShow,id} = props;
    let [info,setInfo] = useState("");
    let [put,setPut] = useState(false);
    return <div 
        className="message_wrap"
        style={{
            transform: `translateY(${show?0:"100%"})`
        }}
    >
        <textarea 
            value={info}
            onChange={(e)=>{
                setInfo(e.target.value);
            }}
        />
        {put?<footer className="miiapv_footer put">评论提交中……</footer>:<footer className="miiapv_footer"
            onClick={()=>{
                if(!info.trim()){
                    alert("请输入内容");
                    return ;
                }
                putMessage({
                    article_id:id,
                    content:info
                }).then(()=>{
                    console.log('发表评论完成');
                    setPut(false);
                    setInfo("");
                    setShow(false);
                    dispatch({
                        type: "MESSAGE_ADD",
                        // 更新仓库
                        messageList: {
                            content: info,
                            create_time: Date.now(),
                            username: getUser
                        }
                    })
                });
                setPut(true);
            }}
        >发表评论</footer>}
    </div>;
}
export default Message; 
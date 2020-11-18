import React from 'react';
import {  useSelector } from "react-redux";
import Date from '../../common/component/Date';
function MessageListView(props) {
    const {data}=props
    let { messageList, loadEnd, loading } = data;
    return (<div>
        <ul className="comment_list">
            {
                messageList.map((item, index) => (
                    <li key={index}>
                        <div className="user_comment clearfix">
                            <span>{item.username}</span>
                        </div>
                        <div className="comment_txt">{item.content}</div>
                        <div className="comment_footer">
                            <time>
                                <Date
                                    time={item.create_time}
                                />
                            </time>
                        </div>
                    </li>
                ))
            }
        </ul>
        <a className="comment_list_more">{loadEnd ? "没有新的数据了" : (loading ? "正在加载中" : "上滑加载更多")}</a>
    </div>)
}
function MessageList() {
    const data = useSelector(state => state.messageList)
    let {messageList} = data;
    return (
        <div className="comment_list_wrap">
            {messageList.length <= 0 ? <p className="comment_list_info">快来发布一条评论吧</p> : <MessageListView data={data} />}
        </div>
    );
}
export default MessageList;
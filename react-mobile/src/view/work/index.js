import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Frame from "../../common/component/Frame";
import useWork from '../../store/action/work';
import Skeleton from '../../common/component/skeleton';
import Main from './main';
import { useHistory, useParams } from 'react-router-dom';
import useMessageList from '../../store/action/messageList';
import Message from './message';
import "../../common/css/miaov.css";
export default function Work() {
    // console.log('work render');
    const state = useSelector(state => state.work)
    const user = useSelector(state => state.getUser)
    const messageList = useSelector(state => state.messageList)
    // 将组件状态与仓库状态关联
    let [page, setPage] = useState(messageList.page)
    const { data, loading } = state

    const params = useParams()
    // 作品id
    let { id } = params;

    let [showMessage, setShow] = useState(false);
    const getWork = useWork()
    const dispatch = useDispatch()
    const history = useHistory()

    const getMessageList = useMessageList()

    function getMessageData() {
        let promise = getMessageList(id, page)
        setPage(++page)
        return promise
    }
    useEffect(() => {
        getWork(id)
        getMessageData();
        return () => {
            // 重置为空
            dispatch({
                type: "WORK_RESET"
            });
            dispatch({
                type: "MESSAGE_RESET"
            });
        }
    }, []);
    return (
        <div>
            <Frame
                pullUp={true}
                getData={getMessageData}
            >
                {
                    loading ? <Skeleton /> : (<Main data={data}></Main>)
                }
            </Frame>
            <footer
                className="miiapv_footer"
                onClick={() => {
                    if (user) {
                        setShow(true);
                    } else {
                        history.push("/login");
                    }
                }}
            >回复本帖</footer>
            <Message
                show={showMessage}
                setShow={setShow}
                id={id}
            />
        </div>
    );
}


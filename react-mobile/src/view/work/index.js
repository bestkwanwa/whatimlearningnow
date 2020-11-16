import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Frame from "../../common/component/Frame";
import useWork from '../../store/action/work';
// import getMessageList from "../../store/action/getMessageList";
import Skeleton from '../../common/component/skeleton';
// import Main from './main';
// import Message from './message';
import { useParams } from 'react-router-dom';


import Tab from '../../common/component/Tab';


import "../../common/css/miaov.css";
export default function Work(props) {
    const state = useSelector(state => ({
        ...(state.work),
        user: state.getUser
    }))

    const { data, loading } = state

    console.log('loading', loading);
    console.log('data', data);

    const params = useParams()
    let { id } = params;

    // let { data, loading, dispatch, match, user, history } = props;
    let [showMessage, setShow] = useState(false);
    // function getMessageData() {
    //     return dispatch(getMessageList(id));
    // }
    const getWork = useWork()
    const dispatch = useDispatch()
    useEffect(() => {
        getWork(id)
        // getMessageData();
        return () => {
            // 重置为空
            dispatch({
                type: "WORK_RESET"
            });
            // dispatch({
            //     type: "MESSAGE_RESET"
            // });
        }
    }, []);
    return (
        <div>
            <Frame
            // pullUp={true}
            // getData={getMessageData}
            >
                {
                    loading ? <Skeleton /> : (<div className="workDetails">
                        <Tab
                            data={data.image_path.map(item => item.path)}
                            render={src => <img src={src} />}
                        ></Tab>
                    </div>)
                }
            </Frame>
            <footer
                className="miiapv_footer"
            // onClick={() => {
            //     if (user) {
            //         setShow(true);
            //     } else {
            //         history.push("/login");
            //     }
            // }}
            >回复本帖</footer>
            {/* <Message
                show={showMessage}
                setShow={setShow}
                id={id}
            /> */}
        </div>
    );
}


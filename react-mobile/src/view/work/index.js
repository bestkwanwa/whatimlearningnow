import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Frame from "../../common/component/Frame";
import useWork from '../../store/action/work';
import Skeleton from '../../common/component/skeleton';
import Main from './main';
import { useParams } from 'react-router-dom';
import "../../common/css/miaov.css";
export default function Work() {
    console.log('work render');
    const state = useSelector(state => state.work)

    const { data, loading } = state

    const params = useParams()
    let { id } = params;

    // let [showMessage, setShow] = useState(false);
    const getWork = useWork()
    const dispatch = useDispatch()
    useEffect(() => {
        getWork(id)
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
                    loading ? <Skeleton /> : (<Main data={data}></Main>)
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


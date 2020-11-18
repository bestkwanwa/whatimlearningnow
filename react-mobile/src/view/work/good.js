import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import {   useSelector } from "react-redux";
import {useGetGood,useSetGood,useCancelGood} from '../../store/action/good';
export default function Good() {
    let { good, goodid } = useSelector(state => state.good)
    let user=useSelector(state=>state.getUser)
    const history = useHistory()
    const getGood=useGetGood()
    const setGood=useSetGood()
    const cancelGood=useCancelGood()
    const {data} = useSelector(state => state.work)
    const {good:goodNub,id}=data
    let point = {};
    const [goodCount, setGoodCount] = useState(parseInt(goodNub));
    useEffect(() => {
        getGood(id)
    }, [user]);
    return (
        <p className="miiaov_zan">
            <span>有{goodCount}人学的很赞</span>
            <span
                className={"iconfont icon-tuijian1 " + (good ? "good" : "")}
                onTouchStart={(e) => {
                    let touch = e.changedTouches[0];
                    point.x = touch.pageX;
                    point.y = touch.pageY;
                }}
                onTouchEnd={(e) => {
                    let touch = e.changedTouches[0];
                    let nowPoint = {
                        x: touch.pageX,
                        y: touch.pageY
                    };
                    if (Math.abs(nowPoint.x - point.x) < 5
                        && Math.abs(nowPoint.y - point.y) < 5) {
                        if (user) {
                            console.log('user',user);
                            if (good) {
                                console.log('good',good);
                                // 如果已点赞，则取消点赞，点赞人数减一
                                cancelGood({
                                    id,
                                    goodid
                                }).then(res => {
                                    if (res) {
                                        console.log('minus one');
                                        setGoodCount(goodCount - 1);
                                    }
                                });
                            } else {
                                console.log('not good');
                                // 未点赞，则点赞
                                setGood(id).then(res => {
                                    if (res) {
                                        console.log('add one');
                                        setGoodCount(goodCount + 1);
                                    }
                                });
                            }
                        } else {
                            // 未登录则跳转登录页
                            history.push("/login");
                        }
                    }
                }}
            ></span>
        </p>
    );
}

import React, { useEffect, useRef, useState } from 'react';
import BetterScroll from 'better-scroll';

// 轮播图组件
export default function Tab(props) {
    const [now, setNow] = useState(0)
    let { data, render } = props
    console.log('now data',data);
    let bannerWrap = useRef(null)
    let betterScroll = null
    useEffect(() => {
        let timer = 0;
        betterScroll = new BetterScroll(bannerWrap.current, {
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical",
            momentum: false,
            snap: {
                loop: true
            }
        });
        betterScroll.on("scrollEnd", () => {
            setNow(betterScroll.getCurrentPage().pageX);
        });
        timer = setInterval(() => {
            betterScroll.next(200);
        }, 2000);
        bannerWrap.current.addEventListener("touchstart", () => {
            clearInterval(timer);
        });
        bannerWrap.current.addEventListener("touchend", () => {
            timer = setInterval(() => {
                betterScroll.next(200)
            }, 2000);
        })
        return () => {
            clearInterval(timer);
        }
    }, [betterScroll]);
    return (
        <div className="banner">
            <div className="banner_img" ref={bannerWrap}>
                <ul className="banner_list clearfix">
                    {
                        data.map((item, index) => <li key={index}>{render(item)}</li>)
                    }
                </ul>
            </div>
            {
                data.length <= 1 ? "" : (<ul className="banner_nav">
                    {
                        data.map((item, index) => <li key={index} className={index === now ? "active" : ""}></li>)
                    }
                </ul>)
            }
        </div>
    )
}
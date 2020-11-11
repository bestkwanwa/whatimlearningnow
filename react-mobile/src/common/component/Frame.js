import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Menu from './Menu';
import BetterScroll from 'better-scroll';
import { useInnerHeight } from '../hooks';
import '../css/reset.css';
import '../css/common.css';
export default function Frame(props) {
    const [menuState, setMenuState] = useState(false)
    const innerH = useInnerHeight()
    let pageScroll = null
    const wrap = useRef(null)
    function changeMenuState() {
        setMenuState(!menuState)
    }
    function menuHide() {
        setMenuState(false)
    }
    useEffect(() => {
        pageScroll = new BetterScroll(wrap.current,{
            preventDefaultException:{
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
            }
        })
    }, [])
    return (
        <div>
            <Header changeMenuState={changeMenuState}></Header>
            <Menu menuHide={menuHide}></Menu>
            <div id='main' style={{
                transform: `translateX(${menuState ? 4.5 : 0}rem)`,
                height: innerH
            }}
                onTouchStart={menuHide}
            >
                <div className='pageWrap'
                    ref={wrap}
                >
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}
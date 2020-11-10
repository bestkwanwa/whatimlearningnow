import React, { useState } from 'react';
import Header from './Header';
import Menu from './Menu';
import '../css/reset.css';
import '../css/common.css';
export default function Frame(props) {
    const [menuState,setMenuState]= useState(false)
    function changeMenuState(){
        setMenuState(!menuState)
    }
    function menuHide(){
        setMenuState(false)
    }
    return (
        <div>
            <Header changeMenuState={changeMenuState}></Header>
            <Menu></Menu>
            <div id='main' style={{
                transform:`translateX(${menuState?4.5:0}rem)`
            }}
                onTouchStart={menuHide}
            >
                {props.children}
            </div>
        </div>
    )
}
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Status() {
    const data = useSelector(state => state.data)
    const doneData = data.filter(item => item.checked === false)
    const dispatch=useDispatch()
    return (
        <div id="todo-stats">
            <span className="todo-count">
                <span className="number">{doneData.length}</span>
                <span className="word">项待完成</span>
            </span><span className="todo-clear">
                <a href='/#'
                    onClick={()=>{
                        dispatch({
                            type:'DELETE_ALL'
                        })
                    }}
                >Clear<span>{data.length - doneData.length}</span> 已完成事项</a>
            </span>
        </div>
    );
}
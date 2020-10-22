import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Li(props) {
    const { data } = props
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [val, setVal] = useState(data.title)
    const input = useRef()
    useEffect(() => {
        if (edit) {
            input.current.focus()
        }
    })
    return (
        <li className="" >
            <div className={`todo ${edit ? 'editing' : ''} ${data.checked ? 'done' : ''}`}>
                <div className="display">
                    <input className="check"
                        type="checkbox"
                        checked={data.checked}
                        onChange={({ target }) => {
                            dispatch({
                                type: 'SELECT',
                                checked: target.checked,
                                id: data.id
                            })
                        }}
                    />
                    <div className="todo-content"
                        onDoubleClick={() => {
                            setEdit(true)
                        }}
                    >{data.title}</div>
                    <span className="todo-destroy"
                        onClick={() => {
                            dispatch({
                                type: 'DELETE',
                                id: data.id
                            })
                        }}
                    ></span>
                </div>
                <div className="edit">
                    <input
                        ref={input}
                        className="todo-input"
                        type="text"
                        value={val}
                        onChange={({ target }) => {
                            setVal(target.value)
                        }}
                        onBlur={({ target }) => {
                            if (target.value.trim()) {
                                dispatch({
                                    type: 'EDIT',
                                    id: data.id,
                                    title: target.value
                                })
                            } else {
                                setVal(data.title)
                            }
                            setEdit(false)
                        }}
                    />
                </div>
            </div>
        </li>
    )
}
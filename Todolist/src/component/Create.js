import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Create() {
    const [val, setVal] = useState('')
    const dispatch = useDispatch()

    return (
        <div id="create-todo">
            <input
                id="new-todo"
                placeholder="What needs to be done?"
                autoComplete="off"
                type="text"
                value={val}
                onChange={({ target }) => {
                    setVal(target.value)
                }}
                onKeyDown={(e) => {
                    if (e.target.value.trim() && e.key === 'Enter') {
                        dispatch({
                            type: "ADD",
                            title: val,
                            id: Date.now()
                        })
                        setVal('')
                    }
                }}
            />
        </div>
    );
}
import React from 'react';

export default function IndexPage(props){
    let {username}=props
    return (
        <h1>
            {username}
            -indexpage
        </h1>
    )
}
import React, { Fragment } from 'react';
import Nav from '../../component/Nav';
import { indexNavs } from '../../router';
export default function IndexPage() {
    return (
        <Fragment>
            <Nav 
            data={indexNavs}
            style={{
                marginTop:'10px'
            }}
            selected={()=>{
                
            }}
            ></Nav>
        </Fragment>
    )
}
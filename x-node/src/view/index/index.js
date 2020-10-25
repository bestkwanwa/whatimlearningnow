import React, { Fragment } from 'react';
import Nav from '../../component/Nav';
import { indexNavs } from '../../router';
import qs from 'qs';
import { useLocation } from 'react-router-dom';
export default function IndexPage() {
    return (
        <Fragment>
            <Nav 
            data={indexNavs}
            style={{
                marginTop:'10px'
            }}
            selected={({search})=>{
                search=qs.parse(search.substr(1))
                let key=indexNavs.findIndex(item=>{
                    let {tab}=qs.parse(item.to.substr(2))
                    return tab==search.tab
                })
                if(search.tab===undefined){
                    return '0'
                }
                return key+''
            }}
            ></Nav>
        </Fragment>
    )
}
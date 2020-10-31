import React from 'react';
import { Pagination } from 'antd';
import { Link, useHistory, useLocation } from 'react-router-dom';
import qs from 'qs';

export default function IndexPagination() {
    let { search } = useLocation()
    let { tab = 'all', page = 1 } = qs.parse(search.substring(1))
    let {push}=useHistory()
    return (
        <div className='index-pagination'>
            <Pagination
                defaultCurrent={page}
                defaultPageSize={10}
                total={100}
                // 推荐使用onChange，使用起来性能更好
                onChange={(page)=>{
                    // history.push 改变 url 即可跳转
                    push(`/?tab=${tab}&page=${page}`)
                }}
                // itemRender={(page, type) => {
                //     switch (type) {
                //         case 'page':
                //             return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>
                //         case 'prev':
                //             return <Link to={`/?tab=${tab}&page=${page}`}>{'<'}</Link>
                //         case 'next':
                //             console.log(page,type);
                //             return <Link to={`/?tab=${tab}&page=${page}`}>{'>'}</Link>
                //         default:
                //             return <Link to={`/?tab=${tab}&page=${page}`}>{'...'}</Link>
                //     }
                // }}
            ></Pagination>
        </div>
    )
}
import React from 'react';
import routeList from './route-list';
import { Route, Switch } from 'react-router-dom';

// 主页路由
export default function IndexRouter(){
    return (
        <Switch>
            {routeList.map((item,index)=>{
                return <Route
                    key={index}
                    exact={item.exact}
                    path={item.path}
                    render={(props)=>{
                        return item.render(props)
                    }}
                    // 这样写也能吧路由信息传进 render 
                    // render={item.render}
                ></Route>
            })}
        </Switch>
    )
}
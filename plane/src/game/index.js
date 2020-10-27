import {Application} from 'pixi.js';

// 初始化
export const game=new Application({
    width:750,
    height:1080
}) 

// game.view 为 canvas 的实例对象
document.body.append(game.view)

// canvas 的根容器
export function getRootContainer(){
    return game.stage
}
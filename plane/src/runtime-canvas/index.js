// 实现基于 canvas 的自定义渲染器
import { createRenderer } from 'vue';
import { Container, Sprite, Texture } from 'pixi.js';

const renderer = new createRenderer({
    // 根据 type 返回创建的元素
    createElement(type) {
        let element;
        switch (type) {
            case 'container':
                element = new Container()
                break;
            case 'sprite':
                element = new Sprite()
                break;
        }
        return element
    },
    // 将 element 添加到视图
    insert(el, parent) {
        if (el) {
            // pixi 提供的 addChild
            parent.addChild(el)
        }
    },
    // vue 获取父级元素
    parentNode(node) {
        return node.parent
    },
    // 当元素被销毁时
    remove(el) {
        if (el && el.parent) {
            el.parent.removeChild(el)
        }
    },
    // 处理prop
    patchProp(el, key, prevValue, nextValue) {
        switch (key) {
            case 'texture':
                // pixi 设置图片
                el.texture = Texture.from(nextValue)
                break;
            // 注意是onClick不是click
            case 'onClick':
                // pixi 点击事件注册
                el.on('pointertap', nextValue)
                break;
            default:
                el[key] = nextValue
                break;
        }
    },
    nextSibling() {
        // vue 会调用，必须提供这个函数
    },
    createComment() {
        // 同上，什么都不做
    }
})

export function createApp(rootComponent) {
    return renderer.createApp(rootComponent)
}
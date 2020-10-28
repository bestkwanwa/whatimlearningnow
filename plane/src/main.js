import { createApp } from './runtime-canvas'
import {getRootContainer} from './game';
import App from './App.vue'

createApp(App).mount(getRootContainer())

// 减少warning提示
window.console.warn=()=>{}
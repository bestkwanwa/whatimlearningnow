# 仿cnodejs.org的React练手项目

## 项目依赖
- react
- react-redux
- react-router-dom
- redux
- antd
- axios
- moment.js >> day.js
- qs

## 视图
- 首页
    - 首页导航
    - 首页子导航
    - 列表组件
- topic详情
- user详情
- 关于

## WorkFlow

### 初始化项目 & 划分项目结构
- 配置 config-overrides ，设置 babel 按需加载
- 建立便于维护的项目结构
    - component >> 通用组件
        - Header
        - Footer
        - List
    - view >> 路由对应视图
    - router >> 路由相关信息
    - store >> redux仓库
    - static >> 静态资源

### 路由规划
- 建立路由表

### 响应式布局
- 媒体查询
- antd 栅格系统
    - 响应式 header

### 首页导航
- 建立导航表
- Menu.item 选中处理

### 首页子导航
- 建立子导航表
- Menu.item 选中处理

### 列表通用组件
- 初始化
- 获取数据

### 

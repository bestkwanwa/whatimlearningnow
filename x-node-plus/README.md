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
        - avatar
        - tag
        - title
        - date
    - 翻页导航
- topic详情
    - content
    - comment
- user详情
    - details
    - topics
    - replies
- 关于

## WorkFlow

### 初始化项目 & 划分项目结构
- 配置 config-overrides ，设置 babel 按需加载
- 建立便于维护的项目结构
    - component >> 通用组件
        - Header
        - Footer
        - TopicList
        - TopicTag
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

### 请求数据
- 利用 React Hooks 请求数据
    - axios 请求数据
    - dispatch 更新 store

### 列表组件
- 头像
- 标签
- 标题
- 日期
    - moment.js >> day.js

### 分页导航
- antd 4.0.1 Pagination current 属性为数字类型
    - 或者使用 defaultCurrent ，每次请求重新渲染
- Pagination 使用 onChange 比 itemRender 性能更好

### 错误提示框
- 请求失败后，提示错误信息

### 主题详情
- 正文 >> Card 组件
    - 注意 title 属性的设置
- 评论 >> Comment 组件

### 用户详情
**组件复用的便利**
- 个人信息
- 最近话题
- 最近回复

### 关于和入门页
- 路径导航 >> Breadcrumb 组件

## 请求数据
- topics >> 40条数据
- topic >> 1条示例数据
- user >> 1条示例数据
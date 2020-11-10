# 移动端企业站

## 项目依赖

## 视图
- 首页
- 课程页
- 讲师页
- 作品页
- 登录页

## workflow

### 项目初始化&项目结构划分

- 建立便于维护的项目结构
    - store >> redux 仓库
        - reducers >> 纯函数
    - view >> 视图
        - index
        - lecturer
        - login
        - course
        - work
    - router >> 路由组件与路由相关信息
    - common
        - component >> 组件

### 路由规划

- 建立路由表
- 创建路由组件

### 页面框架

- Header
- Menu
- Route render 渲染的组件

### 请求配置

- 设置请求代理
https://cloud.tencent.com/developer/article/1664425

### 登录页
- 样式
- 请求验证码
- 登录成功返回上一页
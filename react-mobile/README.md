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
- header 状态改变
- 退出登录
- 菜单展开
    - 取消双击缩放

### 注册
- 注册完返回登录页进行登录

### 滑屏处理
- 使用 better-scroll

### 菜单栏
- 路由表渲染
- 选择后隐藏

### 通用组件 Tab
- 根据传入的 render 进行渲染
- 轮播效果

### 首页
- 轮播图 ✔️
- 其余静态内容
    - 解决 better-scroll 阻止默认事件
    `preventDefaultException`
- 作品区
    - 请求数据
    - 向上滑屏请求数据

### 课程页
- 课程页

todo:切换回首页请求的数据会重复

### 讲师页
- 请求数据
- 页面结构
- 讲师信息弹窗

### 解决滚动穿透
- 结构相互独立
- 阻止默认事件，js自定义滚动条

### 作品详情页
- 解决 better-scroll 阻止默认事件
- 骨架屏
- 解决重复请求
    - 在state里多一个page，页面的page状态与state的page保持关联
    - 或者，多加一个action.type，这个状态下清空state
- 作品详情

### 点赞功能处理

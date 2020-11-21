# MongoDB 入门笔记

## 数据库

### 关系型

- MySQL、Oracle、DB2、SQL Server
- 全是表

### 非关系型（No SQL >> Not Only SQL）

- MongoDB、Redis
- 键值对数据库
- 文档数据库 - MongoDB

### 数据库(database)

- 数据库服务器 >> 保存数据
- 数据库客户端 >> 操作数据，增删改查

## MongoDB 简介

MongoDB的数据模型是面向文档的，所谓文档是一种类似于json的结构，可简单理解为MongoDB中存的是各种各样的json。

### 概念

- 数据库（database）- 数据库是一个仓库，仓库中存放集合
- 集合（collection）- 集合类似数组，集合中存放文档
- 文档（document）- 文档数据库中的最小单位，我们存储和操作的内容都是文档

## 启动

- 后台启动 mongodb：

  > mongod --dbpath /usr/local/var/mongodb --logpath /usr/local/var/log/mongodb/mongo.log --fork
  >
  > --dbpath 设置数据存放目录
  > --logpath 设置日志存放目录
  > --fork 在后台运行

  或者按配置文件启动

  > mongod --config /usr/local/etc/mongod.conf
  >
  > --config 设置配置文件目录

- 查看 mongod 服务是否启动：

	> ps aux | grep -v grep | grep mongod

- 连接

	> mongo

- 退出

  > - 如果是前台运行，可以直接Ctrl-C，mongodb会自己安全退出。
  >
  > - 如果是后台运行，则需要使用mongo发送退出命令：
  >
  >   $mongo
  >
  >   \>use admin
  >
  >   switched to db admin
  >
  >   \>db.shutdownServer();
  >
  >   \>exit

## 使用

### 基本命令

- show dbs - 显示mongodb中数据库
- use [databaseName] - 进入数据库
- db - 显示当前进入的数据库
- show collections - 显示数据库中的集合

### 数据库的CRUD操作

- Create
  - db.[collectionName].insertOne() - New in version 3.2
  - db.[collectionName].insertMany() - New in version 3.2
- Read
  - db.[collectionName].find()
    - sort() 
- Update
  - db.[collectionName].updateOne() - New in version 3.2
  - db.[collectionName].updateMany() - New in version 3.2
  - db.[collectionName].replaceOne() - New in version 3.2
- Delete
  - db.[collectionName].deleteOne() - New in version 3.2
  - db.[collectionName].deleteMany() - New in version 3.2

## 文档之间的关系

- 一对一
- 一对多
- 多对多

## Mongoose 简介

Mongoose 是一个对象文档模型（ODM）库，它对Node原生的MongoDB模块进行了进一步的优化封装，并提供了更多功能。

- 为文档创建了一个模式结构（Schema）>> 约束
- 提供验证
- 转换类型

### Mongoose提供的对象

- Schema（模式对象）

  约束文档的结构

- Model

  相当于集合

  - 创建Model时，如`  const ModelName = mongoose.model('modelName', schema,[collectionName]);`，若不传第三个参数，则创建的collection为复数形式。

- Document

  相当于文档
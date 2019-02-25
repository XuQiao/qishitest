### 小测验
微信小程序源代码, 只需要修改`src/data/`下面的数据就可以创建你自己的小程序.


#### 如何开发
```text
# 启动wepy
wepy build --watch

# 导入dist 文件夹到微信开发者工具

# 启动data数据实时生成
# 生成的json的数据会在  dist-data目录下面
npm run data

# 修改home.wpy loadDataJson方法的url值
# 将url改成本地`dist-data/data.json`的地址, 使用https协议
# 把data.json放置于腾讯服务器上，并加入外部服务器白名单
# 也可以使用https-server创建一个开发环境的https服务
```

#### 微信开发者工具设置
- [ ] ES6 转 ES5
- [x] 上传代码时样式自动补全
- [ ] 上传代码时自动压缩混淆
- [ ] 上传时进行代码保护
- [ ] 使用 npm 模块
- [ ] 自动运行体验评分
- [ ] 启用自定义处理命令
- [x] 不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书
- [x] 启动多核心编译

#### Reference
- 小程序组件化开发框架 https://tencent.github.io/wepy/
-  奇葩小测验 - 一个很值得看一看的简单小程序 https://github.com/AJLoveChina/wechat-qipaceyan
- Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web. http://vuejs.org
- 轻量、可靠的小程序 UI 组件库 https://youzan.github.io/vant-weapp
- 微信小程序开发资源汇总 💯 https://github.com/justjavac/awesome-wechat-weapp

#### License
MIT

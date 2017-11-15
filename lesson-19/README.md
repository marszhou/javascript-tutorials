# 第十九课 React环境

## 前期准备

* [安装node](https://nodejs.org/en/)
    * [nvm 安装](http://www.imooc.com/article/14617): 系统中同时存在多个不同的node，可在不同node之间切换
    * 自由阅读: [面向Node.js新手的7个技巧](https://jinlong.github.io/2013/10/17/7-tips-for-a-node-dot-js-padawan/)
* [安装yarn](https://yarnpkg.com/zh-Hans/docs/install): 代替npm作为包管理命令
    * 自由阅读：[新的 js 包管理工具 yarn 解决了什么问题？](https://zhuanlan.zhihu.com/p/22967139)

## 认识node项目

1. 新建一个node

    ```
    npm init -y
    ```
    将会生成package.json

    ```
    {
      "name": "test",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }
    ```

2. 安装依赖包

    ```
    npm i package_name[@version] -S
    ```

    i 是install的缩写
    -s是--save的缩写
    所以可以这样写

    ```
    npm i lodash -S
    ```
    或

    ```
    npm install jquery@2 --save
    ```

    这时可以查看package.json

    ```
    {
      "name": "test",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {
        "jquery": "^2.2.4",
        "lodash": "^4.17.4"
      }
    }
    ```

    为什么要写-S或--save呢，dependencies项目下多了两个依赖关系，并且会发现，项目目录根目录下多了，node_modules目录，里面也多了一堆东西，如果不写-S，就只安装了文件却不对package.json进行修改。

    推荐用yarn 命令安装

    ```
    yarn add packagename@version
    ```

    安装开发依赖，使用--save-dev开关或者-D

3. 运行脚本

    为node package添加一个命令

    ```
    {
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node index.js"
      },
      ...
    }

    ```

    index.js的内容

    ```
    console.log('hello nodejs');
    ```

    这时候在命令行执行

    ```
    npm start
    # 或
    yarn start
    ```

    就成功执行了这条命令

    * start是一个特殊项目

    如果

    ```
    {
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node index.js",
        "helloNode": "babel-node index.js"
      },
      ...
    }
    ```

    则要运行

    ```
    npm run helloNode
    # 或
    yarn run helloNode
    ```

    注意区别，也注意为什么可以使用babel-node命令

**一般来说在github上发现一个新项目想要运行的时候，先把项目用git clone 下载下来，另外要首先看项目的package.json，并安装依赖包``` npm install ``` 或 ``` yarn install ```**

## 新建React项目

github上有很多react的模板(boilerplate)项目，是为了让人能快速进入开发react的过程中，而把一些环境配置都预先配好的空白项目，这里我推荐使用create-react-app，这是一个命令行工具，可以使用它来快速创建一个react的运行环境：

1. 安装 [create-react-app](https://github.com/facebookincubator/create-react-app)

    create-react-app实际上就是一个node项目，所以也可以用npm或yarn命令安装：

    ```
    npm install -g create-react-app
    ```

    -g开关代表安装在全局环境（不是在当前项目目录下安装了，可以在系统里任何地方使用）

2. 创建一个空的react-app项目

    ```
    create-react-app my-app
    cd my-app/
    npm start
    ```

    其实有很多不同类型的模板可以使用，我在这里使用[custom-react-scripts](https://github.com/kitze/custom-react-scripts)作为模板创建新项目：

    ```
    create-react-app my-app --scripts-version custom-react-scripts
    cd my-app/
    npm start
    ```

## React

预习：https://reactjs.org/tutorial/tutorial.html

## VSCode插件推荐

* Auto Close Tag
* Auto Rename Tag
* VSCode - Babel
* Bracket Pair Colorizer
* Copy Relative Path
* VS Code ESLint extension
* Git History
* Path Intellisense
* Prettier formatter for Visual Studio Code
* React Component
* VS Code Reactjs snippets
* Material Icon Theme

字体 [Fira Code](https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions)
# React 入门（1）组件

本教程内容是基于React 16的功能编写。

## 为什么需要React这类框架？

* 前端开发中的组件化、模块化
* 逻辑层、数据层和表现层的一体化
* 组件的自由组合，互动，适合复杂组件的开发

![](https://ws2.sinaimg.cn/large/006tNc79ly1flrvmfilblj30l50ct3yz.jpg)

## 相关类库

* [react](https://www.npmjs.com/package/react) React框架库
* [react-dom](https://www.npmjs.com/package/react-dom) React与DOM环境的对接API
    * findDOMNode
    * render
    * unmountComponentAtNode
* [prop-types](https://www.npmjs.com/package/prop-types) 用于定义react组件的属性类型并运行时检查属性是否合法

**试试Hello World**

```
import React from 'react';
import ReactDom from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

## JSX

JSX是一种javascript的扩展语法，允许直接在js文件中使用类似html的标签代码定义react组件结构。

JSX 不能直接被浏览器执行，需要被进行相应的语法转换后才能运行，jsx并不是仅仅一种模板，它赋值的element对象实际上是纯javascript对象。如：

```
const element = <h1>Hello, world!</h1>;
```

转换后：

```
var element = React.createElement(
  "h1",
  null,
  "Hello, world!"
);
```

可以使用 [babel在线编辑工具](https://babeljs.io/repl/) 尝试JSX和普通js之间的编译效果。

JSX语法可以直接使用html模板外有什么要点呢？★

* 通用规则

    * 必须符合xml结构，不像html在浏览器中如果标签没有成对出现时浏览器会自动兼容，在react中标签必须成对出现
    * 在组件中插入值的时候使用花括号{}如

    ```
    const el = <div className={['c1', 'c2'].join(' ')}>{props.name}</div>
    ```

* HTML自有标签

    * 命名：都是全小写字母的
    * 可以使用非标准html标签，比如 ```<aaa />```，但是会被警告
    * 可以使用自定义属性
    * 对于有名属性，应该使用变量名的驼峰形式，比如html标签有属性tabindex，在react中应该写成tabIndex
    * class属性应该转换为className，如：

    ```
    const el = <div className="class1 class2">...</div>
    ```

    * style属性的值为对象，如：

    ```
    const el = <div style={{width: 1， height: 2}}>...</div>
    ```

    * dangerouslySetInnerHTML属性，在react组件中，直接写在内容部分的字符会被HTML转义，这是为了防止XSS攻击，但是如果有时候你就是想使用HTML元字符的时候需要用dangerouslySetInnerHTML设置，如：

    ```
    <div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}} />;
    ```

    * onChange 事件比原生html里的onchange事件更强大

* 自定义标签（或者说自定义组件）

    * 命名：首字母大写的驼峰形式，比如TodoApp

**实用工具**: [html to jsx compiler](https://magic.reactjs.net/htmltojsx.htm)
**更多文档**: https://reactjs.org/docs/dom-elements.html

## 两种创建React Component的方法

### 函数组件(Functional Component) ★

或者叫无状态组件(Stateless Component)，顾名思义，这种组件是没有自己保存状态的，它用来显示的参数全部来自外部传递进来的属性(props)和上下文(context)

例如:

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

这里Welcome就是组件的名字，而函数体实际就是组件的render过程，你可以在其他组件的render中这样使用：

```
<Welcome name="World" />
```

### 类组件(Class Component)

显然类组件是相对于无状态组件的有状态组件，而且有生命周期。

例如:

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

**类组件必须有render方法。**

* 类组件的state

    * 初始化，应该在constructor里完成 ★
    * 用.setState方法来设置新的状态，可以只设置状态中的一部分，react会自动和state合并，每次setState会导致render方法被调用 ★

    ```
    class Comp extends React.Component {
      constructor(props) {
        super(props);
        this.state = {counter: 0, someOtherState: '...'};
      }

      render() {
        return (
          <div>counter={this.state.counter}
            <button
              onClick={() => this.setState({counter: this.state.counter + 1})}
            >
              add
            </button>
          </div>
        )
      }
    }
    ```

* 类组件的生命周期

    组件创建加载时的执行顺序

    * constructor()
    * componentWillMount()
    * render()
    * componentDidMount()

    更新时的执行顺序

    * componentWillReceiveProps()
    * shouldComponentUpdate()
    * componentWillUpdate()
    * render()
    * componentDidUpdate()

    组件被卸载时

    * componentWillUnmount()

    组件出错时

    * componentDidCatch()


参考资料：

* https://reactjs.org/docs/components-and-props.html
* https://reactjs.org/docs/state-and-lifecycle.html
* https://reactjs.org/docs/react-component.html

## 附录

### ES6的Module

#### [import](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)

```
import defaultExport from "module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

#### [export](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export)

```
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // also var
export let name1 = …, name2 = …, …, nameN; // also var, const

export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
```



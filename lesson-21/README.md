# 第二十一课 React入门（2）Props

React组件能像HTML标签一样通过属性向组件传递参数。


## Quick Start

假如有Welcome组件，用两种方法：

函数式

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

class式

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## 声明属性的必要性

以上两个组件所起的作用是相同的，它们所使用的Props都是未经声明的，这样做在复杂组件会十分不方便，因为使用者无法直接看到一个组件支持哪些属性，属性应该赋值什么类型的变量（比如是数字还是字符串还是布尔类型），哪些属性是必填的，属性有哪些默认属性。

虽然声明属性在默认环境下是不必须的，而且属性的检查也不是强制的，但首先这是一个好习惯，二是很多模板库里的语法检查已经把属性检查作为编译报错的一项编译时错误，所以还是需要为组件声明属性。

而属性声明需要prop-types库。

```
> yarn add prop-types
```

### 为函数式组件声明属性

```
import PropTypes from 'prop-types';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

Welcome.propTypes = {
  name: PropTypes.string
}

Welcome.defaultProps = {
  name: 'world'
}
```

### 为class式组件声明

```
import PropTypes from 'prop-types';

class Welcome extends React.Component {
  static propTypes = {
    name: PropTypes.string
  }

  static defaultProps = {
    name: 'world'
  }

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

这样在外部使用组件的时候，我们看到组件的定义的时候就明确的知道，它有一个属性叫name，并且此属性有默认值是'world'

这样在使用的时候

```
<Welcome />
```

就会输出

```
<h1>Hello, world</h1>
```

[在线演示](http://jsbin.com/rubehus/2/edit?html,js,console,output)


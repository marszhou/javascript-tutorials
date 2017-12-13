# 第二十二课 React入门 (3) ref & context

## 引用 ref

使用场景，在一个React 组件中想获得其中某个子元素的dom对象或子组件实例。

使用方法1

```
render() {
    <div>
        <input type='text' ref={el => this.input = el}/>
        <SomeOtherComponent ref={component => this.myComponent = component} />
    </div>
}

// 然后你就可以在其他成员方法里使用 this.input或者 this.component

```

使用方法2（<span style="color:red">不推荐</span>)

```
render() {
    <div>
        <input type='text' ref='input'/>
        <SomeOtherComponent ref='myComponent' />
    </div>
}

// 然后你就可以在其他成员方法里使用 this.refs.input或者 this.refs.myComponent
```

[查看在线例子](https://codepen.io/mattzhou/pen/opgjyK?editors=0010)

[调用子组件方法](https://codepen.io/mattzhou/pen/XVJXJG?editors=0010)
[暴露子组件的ref](https://codepen.io/mattzhou/pen/xpbZVK?editors=0010)

* 正常的使用场景
    1. 调用一些无关渲染的子组件实例上的方法，如focus，click，播放视频音乐
    2. 一些需要触发的特殊动画效果
    3. 其他第三方dom处理类库需要dom对象
* 错误的使用场景
    1. 应该用属性修改子组件的状态，而不是直接调用子组件实例上的方法
    2. 无法对函数式组件使用ref

### 使用 ReactDOM.findDOMNode(component) 方法获取component的渲染dom

[在线例子](https://codepen.io/mattzhou/pen/gobPqe?editors=0010)

## 使用context

场景：坐落在一个父组件中的子组件，可以通过context获得环境内部的上下文信息（简单说子组件如何去调用父组件上的属性呢？需要父组件通过上下文的方式暴露给子组件）

```
class ParentComponent extends React.Component {
    static childContextTypes = {
        prop1: PropTypes...
    }

   getChildContext() {
    return {
        prop1: ...
    }
   }

   render() {
    return <div>{this.props.children}</div>
   }
}


class ChildComponent extends React.Component {
    static contextTypes = {
        prop1: PropTypes...
    }

    // 然后可以在子组件内部用 this.context.prop1属性了
}

function ChildComponent2(props, context) {
    // 然后可以使用context.prop1
}
ChildComponent2.contextTypes = {
    prop1: PropTypes...
}


ReactDOM.render(
    <ParentComponent><ChildComponent /></ParentComponent>
)

```



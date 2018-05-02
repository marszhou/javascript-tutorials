# 练习一

## 计数器列表

index.js

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

document.title = 'Redux Full Sample'

// ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇Reducer⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
const counters = (state = [], action) => {
  //
  // 你的代码
  //
  return state
}

const App = () => (
  <div>
    {
      // 你的代码
    }
    <div>
      <button onClick={() => store.dispatch({ type: 'ADD_COUNTER' })}>
        增加计数器
      </button>
    </div>
  </div>
)

const Counter = ({ value, onIncrement, onDecrement, onDelete }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
    <button onClick={onDelete}>删除计数器</button>
  </div>
)

const store = createStore(counters)

const render = () => ReactDOM.render(<App />, document.getElementById('root'))

window.uns = store.subscribe(render)
render()

```
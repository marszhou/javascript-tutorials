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

答案

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

document.title = 'Redux Full Sample'

const counters = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COUNTER':
      return [...state, 0]
    case 'REMOVE_COUNTER':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    case 'INCREMENT':
      return [
        ...state.slice(0, action.index),
        state[action.index] + 1,
        ...state.slice(action.index + 1)
      ]
    case 'DECREMENT':
      return [
        ...state.slice(0, action.index),
        state[action.index] - 1,
        ...state.slice(action.index + 1)
      ]
  }
  return state
}

const App = () => (
  <div>
    {store.getState().map((value, index) => (
      <Counter
        key={index}
        value={value}
        onIncrement={() =>
          store.dispatch({
            type: 'INCREMENT',
            index
          })
        }
        onDecrement={() =>
          store.dispatch({
            type: 'DECREMENT',
            index
          })
        }
        onDelete={() =>
          store.dispatch({
            type: 'REMOVE_COUNTER',
            index
          })
        }
      />
    ))}
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
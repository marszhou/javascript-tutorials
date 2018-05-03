import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const counters = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COUNTER': return [...state, {id: Math.random().toString(36).substr(2), value: 0}];
    case 'DEL_COUNTER': return [...state].filter(el => el.id !== action.id);
    case 'ADD_VALUE': return [...state].map(el => el.id === action.id ? {id: el.id, value: el.value + 1} : el);
    case 'DEL_VALUE': return [...state].map(el => el.id === action.id ? {id: el.id, value: el.value - 1} : el);
    default: return state;
  }
}

const App = ({ store }) => {
  
  return (
    <div>
      {
        store.getState().map(el => (
          <div key={el.id}>
            <Counter 
              value={el.value}
              onIncrement={() => store.dispatch({type: 'ADD_VALUE', id: el.id})}
              onDecrement={() => store.dispatch({type: 'DEL_VALUE', id: el.id})}
              onDelete={() => store.dispatch({type: 'DEL_COUNTER', id: el.id})}
            />
          </div>
        ))
      }
      <div style={{paddingTop: '10px'}}>
        <button onClick={() => store.dispatch({ type: 'ADD_COUNTER' })}>
          增加计数器
        </button>
      </div>
    </div>
  )
}

const Counter = ({ value, onIncrement, onDecrement, onDelete }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
    <button onClick={onDelete}>删除计数器</button>
  </div>
)

const store = createStore(counters)

const render = () => ReactDOM.render(<App store={store} />, document.getElementById('root'))

window.uns = store.subscribe(render)
render()


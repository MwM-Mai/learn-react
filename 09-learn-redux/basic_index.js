// 1. 导入redux(不能通过ES6的方式 原因:可能 node 版本不支持 13.2.0 以后的在package.josn 添加 type: module 属性)
// commonjs的一种实现 -> nodejs
const redux = require('redux')

// redux 核心: 1. store 2. actions 3. reducer

// 初始化数据(其实是放在reducer函数里面的)
const initialState = {
  counter: 0
}

// 1. store(不能直接修改只能通过 actions 来修改) 在创建的时候需要传入一个 reducer 函数
const store = redux.legacy_createStore(reducer)


// 订阅store的修改 (需要写在派发 actions 的前面 不然派发完所以的 actions 之后订阅不到)
store.subscribe(() => {
  console.log("counter:", store.getState().counter);
})


// 2. actions(对象 通过 store.dispatch 派发事件)
const actions1 = { type: "INCREMENT" }
const actions2 = { type: "DECREMENT" }


const actions3 = { type: "ADD_NUMBER", num: 5 }
const actions4 = { type: "SUB_NUMBER", num: 3 }

// 派发actions
store.dispatch(actions1)
store.dispatch(actions2)
store.dispatch(actions3)
store.dispatch(actions4)


// 3. reducer (纯函数)
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 }
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 }
    case "ADD_NUMBER":
      return { ...state, counter: state.counter + action.num }
    case "SUB_NUMBER":
      return { ...state, counter: state.counter - action.num }
    default:
      return state
  }
}

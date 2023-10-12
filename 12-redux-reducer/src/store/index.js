import { legacy_createStore, applyMiddleware, compose } from 'redux'
// redux-thunk 的使用 1. 导入 redux-thunk
import thunkMiddleware from 'redux-thunk'

// redux-saga 的使用 一、导入 redux-saga
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer.js'

import saga from './saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  trace: true
}) || compose;

// 应用中间件
// 2. 引入 thunkMiddleware 中间件(方法一)
// const storeEnhancer = applyMiddleware(thunkMiddleware)

// 二 、创建 sageMiddleware 中间件(方法二)
const sagaMiddleware = createSagaMiddleware()

// 三、 applyMiddleware 方法可以应用多个中间件
const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware)


const store = legacy_createStore(reducer, composeEnhancers(storeEnhancer))

// 四、 必须调用run方法才可以生效 saga 是一个 生成器函数
sagaMiddleware.run(saga)

export default store
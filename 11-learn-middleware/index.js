import store from './store/index.js'

import { addAction } from './store/actionCreators.js'


store.dispatch(addAction(10))
store.dispatch(addAction(15))
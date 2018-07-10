import { createStore } from 'redux';
import reducer from './reducers/videos'

//recibe tres parametros, mi reducer, mi estado inicial y un enhancer(opcional)
const store = createStore(reducer, {})

export default store;
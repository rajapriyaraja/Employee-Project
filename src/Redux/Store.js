import { createStore, applyMiddleware } from 'redux';
import todoReducer from '../Component/Reducer';
import { thunk } from 'redux-thunk';


const Store = createStore(todoReducer, applyMiddleware(thunk));

export default Store;
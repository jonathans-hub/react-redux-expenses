import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import {expensesReducer} from '../reducers/expensesReducer'
import thunk from 'redux-thunk'


export const store = createStore (expensesReducer, applyMiddleware(thunk))

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import expenseReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import authReducer from '../reducers/auth'
import thunk from 'redux-thunk'

const composeEnchares = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose
export default () => {

    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        composeEnchares(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
        return store
}



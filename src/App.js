
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss'
import 'normalize.css/normalize.css'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import AppRouter from './routers/AppRouter'
import getVisibleExpenses from './selectors/expenses'
import './firebase/firebase'

const store = configureStore()

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'))

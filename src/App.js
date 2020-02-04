
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss'
import 'normalize.css/normalize.css'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import AppRouter, { history } from './routers/AppRouter'
// import getVisibleExpenses from './selectors/expenses'
import { firebase } from './firebase/firebase'
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';

const store = configureStore()

// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }            
        })        
    }
    else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})

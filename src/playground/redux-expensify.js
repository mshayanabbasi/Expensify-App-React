import { createStore, combineReducers } from "redux";
import uuid from 'uuid'


// ADD_EXPENSE

const addExpense = (
    { 
        description =  '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note, 
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// Expense Reducers

const expensesReducersDefaultsState = []

const expenseReducer = (state = expensesReducersDefaultsState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        default:
            return state
    }
}

const filterReducersDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filterReducersDefaultState, action) => {
    switch (action.type) {    
        default:
            return state
    }
}

// Store Creation
const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
}))
store.subscribe(() => {
    console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }))

const expenseTwo = store.dispatch(addExpense({ description: 'Rent', amount: 300 }))

const remove = store.dispatch(removeExpense({ id: expenseOne.expense.id }))
console.log(remove)

const demoState = {
    expenses: [{
        id: '13523423',
        description: 'January rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}
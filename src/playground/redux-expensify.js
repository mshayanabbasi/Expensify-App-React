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

// EDIT_EXPENSE

const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
})

// SET_TEXT_FILTER 

const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_DATE

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// SORT_BY_AMOUNT 

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
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
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.update
                    }
                }
                else {
                    return expense
                }
            })
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
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            } 
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }   
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
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

// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }))

// const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }))

// const remove = store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// console.log(remove)

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())

// store.dispatch(sortByDate())
// store.dispatch(sortByAmount())

store.dispatch(setStartDate(125)) // start date 125
store.dispatch(setStartDate()) // undefined
store.dispatch(setEndDate(1250)) // end date 1250

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

const user = {
    name: 'Shayan',
    age: 22
}

console.log({
    ...user,
    location: 'Karachi',
    age: 21
})
import { createStore, combineReducers } from "redux";
import uuid from 'uuid'





// // Store Creation
// store.subscribe(() => {
//     const state = store.getState()
//     const visibleExpense = getVisibleExpenses(state.expenses, state.filters)
//     console.log(visibleExpense)
// })

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }))

const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }))

// const remove = store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// console.log(remove)

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('ffee'))
// store.dispatch(setTextFilter())

// store.dispatch(sortByDate())
// store.dispatch(sortByAmount())

// store.dispatch(setStartDate(125)) // start date 125
// store.dispatch(setStartDate()) // undefined
// store.dispatch(setEndDate(1250)) // end date 1250

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
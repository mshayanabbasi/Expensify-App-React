import uuid from 'uuid'
import database from '../firebase/firebase'

// ADD_EXPENSE

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            createdAt = 0,
            amount = 0
        } = expenseData
        const expense = { description, note, amount, createdAt }
        database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
} 


// REMOVE_EXPENSE

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE

export const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
})

// SET_EXPENSE 

export const setExpense = (expense) => ({
    type: 'SET_EXPENSE',
    expense
})

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapShot) => {
            const expenses = []
            snapShot.forEach((childSnapShot) => {
                expenses.push({
                    id: childSnapShot.key,
                    ...childSnapShot.val()
                })
            })
            dispatch(setExpense(expenses))
        })
    }
}
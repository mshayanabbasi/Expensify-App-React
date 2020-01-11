import React from 'react';
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem';
import selectedExpense from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        {props.expenses.length === 0 ? (
            <div>
                <span>No Expenses</span>
            </div>
        ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense}/>
                })
        )}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpense(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)
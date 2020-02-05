import React from 'react';
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpensesTotal from '../selectors/expense-total';
import getVisibleExpenses from '../selectors/expenses';
import { Link } from 'react-router-dom';
const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedExpenseTotal = numeral(expenseTotal / 100).format('$0,0.00')
    return (
        <div className="page-header">
            <div className="content-container"> 
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpenseTotal}</span></h1>
                <div className="page-header__actions    ">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)
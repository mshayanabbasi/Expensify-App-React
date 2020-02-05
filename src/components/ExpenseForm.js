import React, { Component } from 'react';
import moment from 'moment'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const now = moment()
console.log(now.format('MMM Do, YYYY'))

class ExpenseForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ?  moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        }
    }
    
    onDescription = (e) => {
        const description = e.target.value
        this.setState({
            description
        })
    }
    onNote = (e) => {
        const note = e.target.value
        this.setState({
            note
        })
    }
    onAmount = (e) => {
        const amount = e.target.value
        if (amount.match(/^\d{1,}(\.\d{0, 2})?$/)) {
            this.setState({ amount })
        }
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState({
                createdAt
            })
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({calenderFocused: focused}))
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            this.setState({
                error: 'Please provide description and amount'
            })
        }
        else {
            this.setState({ 
                error: ''
            })
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render() {
        return (
                <form onSubmit={this.onSubmit} className="form">
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input 
                        className="text-input"
                        value={this.state.description}
                        type="text"
                        placeholder="Description"
                        onChange={this.onDescription}
                    />
                    <input 
                        className="text-input"
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmount}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        className="textarea" 
                        placeholder="Add a note for your expense (optional)"    
                        value={this.state.note}
                        onChange={this.onNote}
                    />
                    <div>
                        <button className="button">Save Expense</button>
                    </div>
                </form>
        )
    }
}

export default ExpenseForm
import React, { Component } from 'react';

class ExpenseForm extends Component {
    state = {
        description: '',
        note: '',
        amount: ''
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
        if (amount.match(/^\d*(\.\d{0, 2})?$/)) {
            this.setState({ amount })
        }
    }
    render() {
        return (
            <div>
                <form>
                    <input 
                        value={this.state.description}
                        type="text"
                        placeholder="Description"
                        onChange={this.onDescription}
                    />
                    <input 
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmount}
                    />
                    <textarea 
                        placeholder="Add a note for your expense (optional)"    
                        value={this.state.note}
                        onChange={this.onNote}
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm
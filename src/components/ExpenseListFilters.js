import React from 'react';
import { connect } from 'react-redux'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';


class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (calenderFocused) => {
        this.setState({
            calenderFocused
        })
    }
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group-item"> 
                        <input 
                            className="text-input"
                            placeholder="Search Expenses"
                            type="text" 
                            defaultValue={this.props.filters.text} 
                            onChange={(e) => {
                                this.props.dispatch(setTextFilter(e.target.value))
                            }}
                        />
                    </div>
                    <div className="input-group-item">
                        <select
                            value={this.props.filters.text}
                            className="select"
                            onChange={(e) => {
                                if (e.target.value === 'date') {
                                    this.props.dispatch(sortByDate())
                                }
                                else if (e.target.value === 'amount') {
                                    this.props.dispatch(sortByAmount())
                                }
                            }}
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select> 
                    </div>
                    <div className="input-group-item">
                        <DateRangePicker 
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calenderFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}



export default connect(mapStateToProps)(ExpenseListFilters)
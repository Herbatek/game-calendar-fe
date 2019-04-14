import React, {Component} from 'react';
import './CalendarHeader.css';
import {Button} from "semantic-ui-react";

interface IProps {
    monthName: string
}

interface IState {

}

class CalendarHeader extends Component<IProps, IState> {
    render() {
        return (
            <div className='calendarHeader'>
                <Button content='Previous month'
                        circular={true}
                        icon='angle left'
                        labelPosition='left'
                        onClick={this.onClickPrevMonth}/>
                <label className='calendarHeader__monthName'>{this.props.monthName}</label>
                <Button content='Next month'
                        circular={true}
                        labelPosition='right'
                        icon='angle right'
                        onClick={this.onClickNextMonth}/>
            </div>
        )
    }

    onClickNextMonth = () => {
        alert('next month has been clicked')
        // TODO: implement logic next month
    };

    onClickPrevMonth = () => {
        alert('previous month has been clicked')
        // TODO: implement logic previous month
    };
}

export default CalendarHeader;
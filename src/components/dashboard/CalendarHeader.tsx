import React, {Component} from 'react';
import {Button} from "semantic-ui-react";
import './CalendarHeader.css';

interface IProps {
    monthName: string
}

interface IState {
    isPreviousMonthAvailable: boolean,
    isNextMonthAvailable: boolean
}

class CalendarHeader extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            isPreviousMonthAvailable: false,
            isNextMonthAvailable: false
        }
    }


    render() {
        const {monthName} = this.props;
        const {isPreviousMonthAvailable, isNextMonthAvailable} = this.state;
        return (
            <div className='calendarHeader'>
                <Button content='Previous month'
                        circular={true}
                        icon='angle left'
                        labelPosition='left'
                        disabled={!isPreviousMonthAvailable}
                        onClick={this.onClickPrevMonth}/>
                <label className='calendarHeader__monthName'>{monthName}</label>
                <Button content='Next month'
                        circular={true}
                        labelPosition='right'
                        icon='angle right'
                        disabled={!isNextMonthAvailable}
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
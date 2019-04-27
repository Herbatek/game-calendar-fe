import React, {Component} from 'react';
import CalendarHeader from './CalendarHeader';
import Calendar from './Calendar';
import {getNumberOfDaysInCurrentMonth, getCurrentMonthName} from '../../util/DateUtil';
import './Show.css';

interface IProps {
    isAuthenticated: boolean,
    currentUser: any,
    onLogout: (redirectTo?: string, notificationType?: string, description?: string) => void
}

interface IState {
    numberOfDaysInCurrentMonth: number,
    currentMonth: string
}

class DashboardShow extends Component<IProps, IState> {
    state = {
        numberOfDaysInCurrentMonth: 0,
        currentMonth: ''
    };

    componentDidMount() {
        this.setState({
            numberOfDaysInCurrentMonth: getNumberOfDaysInCurrentMonth(),
            currentMonth: getCurrentMonthName()
        })
    }

    render() {
        const {currentMonth, numberOfDaysInCurrentMonth} = this.state;
        return (
            <div>
                <CalendarHeader monthName={currentMonth}/>
                <Calendar numberOfDaysInMonth={numberOfDaysInCurrentMonth}/>
            </div>
        );
    }
}

export default DashboardShow;

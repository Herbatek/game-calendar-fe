import React, {Component} from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
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
            numberOfDaysInCurrentMonth: DashboardShow.getNumberOfDaysInCurrentMonth(),
            currentMonth: DashboardShow.getCurrentMonthName()
        })
    }

    render() {
        return (
            <div>
                <CalendarHeader monthName={this.state.currentMonth}/>
                <CalendarBody numberOfDaysInMonth={this.state.numberOfDaysInCurrentMonth}/>
            </div>
        );
    }

    static getCurrentMonthName() {
        return new Date().toLocaleString('en-uk', {month: 'long'})
    }

    static getNumberOfDaysInCurrentMonth() {
        const today = new Date();
        return new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    }
}

export default DashboardShow;

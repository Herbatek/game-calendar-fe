import React, {Component} from 'react';
import './Show.css';

interface IProps {
    isAuthenticated: boolean,
    currentUser: any,
    onLogout: (redirectTo?: string, notificationType?: string, description?: string) => void
}

interface IState {

}

class DashboardShow extends Component<IProps, IState> {
    state = {
        numberOfDaysInCurrentMonth: 0,
        currentMonth: ''
    };

    componentDidMount() {
        this.setState({
            numberOfDaysInCurrentMonth: this.getNumberOfDaysInCurrentMonth(),
            currentMonth: this.getCurrentMonthName()
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.currentMonth}</p>
                {this.renderCalendar()}
            </div>
        );
    }

    renderCalendar() {
        const dayItems = [];
        for (let i = 0; i < this.state.numberOfDaysInCurrentMonth; i++)
            dayItems.push(
                <div className='calendar__singleDay' key={i}>
                    <div className='singleDay__header'>
                        {i + 1}
                    </div>
                    <div className='singleDay__body'>

                    </div>
                </div>);
        return (
            <div className='calendar__container'>
                {dayItems}
            </div>
        )
    }

    getNumberOfDaysInCurrentMonth() {
        const today = new Date();
        return new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    }

    getCurrentMonthName() {
        return new Date().toLocaleString('en-uk', {month: 'long'})
    }
}

export default DashboardShow;

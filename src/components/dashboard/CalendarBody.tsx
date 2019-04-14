import React, {Component} from 'react';
import DayPremieresItem from "./DayPremieresItem";
import './CalendarBody.css';

interface IProps {
    numberOfDaysInMonth: number
}

interface IState {

}

class CalendarBody extends Component<IProps, IState>{
    render() {
        return(
            <div>
                {this.renderCalendar()}
            </div>
        )
    }

    renderCalendar() {
        const monthPremieresItems = [];
        for (let i = 0; i < this.props.numberOfDaysInMonth; i++)
            monthPremieresItems.push(<DayPremieresItem dayNumber={i}/>);
        return (
            <div className='calendar__container'>
                {monthPremieresItems}
            </div>
        )
    }
}

export default CalendarBody;
import React, {Component} from 'react';
import DayPremieresItem from "./DayPremieresItem";
import './Calendar.css';

interface IProps {
    numberOfDaysInMonth: number
}

interface IState {

}

class Calendar extends Component<IProps, IState> {
    render() {
        const {renderCalendar} = this;
        return (
            <div className='calendar__container'>
                {renderCalendar()}
            </div>
        )
    }

    renderCalendar = () => {
        const monthPremieresItems = [];

        const games = [
            'The Witcher 3 Wild Hunt',
            'Counter Strike: Global Offensive 2',
            'Conquer 3.0'
        ];

        for (let i = 0; i < this.props.numberOfDaysInMonth; i++) {
            monthPremieresItems.push(<DayPremieresItem dayNumber={i} key={i} games={games}/>);
        }

        return monthPremieresItems;
    }
}

export default Calendar;
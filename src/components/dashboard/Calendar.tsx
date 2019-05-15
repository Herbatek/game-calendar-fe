import React from 'react';
import DayPremieresItem from "./DayPremieresItem";
import './Calendar.css';

interface IProps {
    numberOfDaysInMonth: number
}

export default (props: IProps) => {
    return (
        <div className='calendar__container'>
            {renderCalendar(props.numberOfDaysInMonth)}
        </div>
    )
};

const renderCalendar = (numberOfDaysInMonth: number) => {
    const monthPremieresItems = [];

    const games = [
        'The Witcher 3 Wild Hunt',
        'Counter Strike: Global Offensive 2',
        'Conquer 3.0'
    ];

    for (let i = 0; i < numberOfDaysInMonth; i++) {
        monthPremieresItems.push(<DayPremieresItem dayNumber={i} key={i} games={games}/>);
    }

    return monthPremieresItems;
};
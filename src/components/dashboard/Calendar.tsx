import React from 'react';
import DayPremieresItem from "./DayPremieresItem";
import {IGame} from '../../interfaces/IGame';
import './Calendar.css';

interface IProps {
    numberOfDaysInMonth: number,
    games: IGame[],
    skipDays: number
}

export default (props: IProps) => {
    return (
        <div className='calendar__container'>
            {renderCalendar(props.numberOfDaysInMonth, props.skipDays)}
        </div>
    )
};

const dateConverter: Function = (dateAsString: string) => {
    const date = dateAsString.split("-");
    if (date.length === 3) {
        return new Date(parseInt(date[2]), parseInt(date[1]), parseInt(date[0]));
    }
};

const renderCalendar = (numberOfDaysInMonth: number, skipDays: number) => {
    const monthPremieresItems = [];

    const tempNumberOfDays = 30;
    const games: IGame[] = [
        {name: 'The Witcher 3 Wild Hunt', premiereDate: dateConverter("28-09-2019")},
        {name: 'Counter Strike: Global Offensive 2', premiereDate: dateConverter("28-09-2019")},
        {name: 'Conquer 3.0', premiereDate: dateConverter("28-09-2019")}
    ];

    const daysPremieres = new Array(tempNumberOfDays);
    daysPremieres.fill([]);
    games.forEach(game => console.log(game.premiereDate));
    games.forEach(game => daysPremieres[game.premiereDate.getDay() - 1].push(game));

    for (let i = 1; i < skipDays; i++) {
        monthPremieresItems.push(<DayPremieresItem dayNumber={1} key={1} games={[]}/>);
    }

    for (let i = 0; i < tempNumberOfDays; i++) {
        monthPremieresItems.push(<DayPremieresItem dayNumber={i} key={i} games={daysPremieres[i]}/>);
    }

    return monthPremieresItems;
};
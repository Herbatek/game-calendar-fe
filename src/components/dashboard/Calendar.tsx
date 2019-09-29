import React from 'react';
import Day from "./Day";
import InvisibleDay from "./InvisibleDays";
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

    const games: IGame[] = [
        {id: 'aa-aa-bb-cc1', name: 'The Witcher 3 Wild Hunt', premiereDate: dateConverter("29-09-2019")},
        {id: 'aa-aa-bb-cc4', name: 'Dota 2', premiereDate: dateConverter("29-09-2019")},
        {id: 'aa-aa-bb-cc5', name: 'Left 4 Dead 2', premiereDate: dateConverter("29-09-2019")},
        {id: 'aa-aa-bb-cc6', name: 'Heathstone', premiereDate: dateConverter("29-09-2019")},
        {id: 'aa-aa-bb-cc7', name: 'Firewatch', premiereDate: dateConverter("29-09-2019")},
        {id: 'aa-aa-bb-cc8', name: 'Cyberpunk', premiereDate: dateConverter("29-09-2019")},
        {id: 'aa-aa-bb-cc2', name: 'Counter Strike: Global Offensive 2', premiereDate: dateConverter("28-09-2019")},
        {id: 'aa-aa-bb-cc3', name: 'Conquer 3.0', premiereDate: dateConverter("27-09-2019")}
    ];

    const mockSkipDays = 6;
    const mockNumberOfDays = 30;
    const daysPremieres = new Array(mockNumberOfDays);

    for (let i = 0; i < mockNumberOfDays; i++) {
        daysPremieres[i] = [];
    }

    games.forEach(game => daysPremieres[game.premiereDate.getDate() - 1].push(game));

    for (let i = 0; i < mockSkipDays; i++) {
        monthPremieresItems.push(<InvisibleDay key={`invisible-${i}`}/>);
    }

    for (let i = 0; i < mockNumberOfDays; i++) {
        monthPremieresItems.push(<Day dayNumber={i} key={`day-${i}`} games={daysPremieres[i]}/>);
    }

    return monthPremieresItems;
};
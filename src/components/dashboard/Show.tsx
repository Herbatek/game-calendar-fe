import React, {useEffect, useState} from 'react';
import CalendarHeader from './CalendarHeader';
import Calendar from './Calendar';
import {getNumberOfDaysInCurrentMonth, getCurrentMonthName} from '../../util/DateUtil';
import {getMonthPremieres} from "../../util/APIUtils";
import './Show.css';

interface IProps {
    isAuthenticated: boolean,
    currentUser: any,
    onLogout: (redirectTo?: string, notificationType?: string, description?: string) => void
}

export default (props: IProps) => {
    const [numberOfDaysInCurrentMonth, setNumberOfDaysInCurrentMonth] = useState(0);
    const [currentMonth, setCurrentMonth] = useState('month');
    const [games, setGames] = useState([]);
    const [firstWeekDayOfMonth, setFirstWeekDayOfMonth] = useState(0);

    useEffect(() => setNumberOfDaysInCurrentMonth(getNumberOfDaysInCurrentMonth()), []);
    useEffect(() => setCurrentMonth(getCurrentMonthName()), []);
    useEffect(() => {
        const date = new Date();
        getMonthPremieres(date.getFullYear(), date.getMonth() + 1)
            .then(response => {
                setGames(response.data.games);
                setNumberOfDaysInCurrentMonth(response.data.numberOfDaysInMonth);
                setCurrentMonth(response.data.month);
                setFirstWeekDayOfMonth(response.data.firstWeekDayOfMonth);
            })
    }, []);
    return (
        <>
            <CalendarHeader monthName={currentMonth} currentDate={new Date()}/>
            <Calendar numberOfDaysInMonth={numberOfDaysInCurrentMonth} games={games} skipDays={firstWeekDayOfMonth}/>
        </>
    );
}
import React, {useEffect, useState} from 'react';
import CalendarHeader from './CalendarHeader';
import Calendar from './Calendar';
import {getNumberOfDaysInCurrentMonth, getCurrentMonthName} from '../../util/DateUtil';
import './Show.css';

interface IProps {
    isAuthenticated: boolean,
    currentUser: any,
    onLogout: (redirectTo?: string, notificationType?: string, description?: string) => void
}

export default (props: IProps) => {
    const [numberOfDaysInCurrentMonth, setNumberOfDaysInCurrentMonth] = useState(0);
    const [currentMonth, setCurrentMonth] = useState('');

    useEffect(() => setNumberOfDaysInCurrentMonth(getNumberOfDaysInCurrentMonth()), []);
    useEffect(() => setCurrentMonth(getCurrentMonthName()), []);

    return (
        <>
            <CalendarHeader monthName={currentMonth}/>
            <Calendar numberOfDaysInMonth={numberOfDaysInCurrentMonth}/>
        </>
    );
}
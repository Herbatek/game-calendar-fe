import React, {useState} from 'react';
import {Button} from "semantic-ui-react";
import './CalendarHeader.css';

interface IProps {
    monthName: string,
    currentDate: Date
}

export default (props: IProps) => {
    const [isPreviousMonthAvailable, setIsPreviousMonthAvailable] = useState(false);
    const [isNextMonthAvailable, setIsNextMonthAvailable] = useState(false);
    const [isMouseOnMonth, setIsMouseOnMonth] = useState(false);
    const {monthName, currentDate} = props;

    return (
        <div className='calendarHeader'>
            <Button content='Previous month'
                    circular={true}
                    icon='angle left'
                    labelPosition='left'
                    disabled={!isPreviousMonthAvailable}
                    onClick={onClickPrevMonth}/>
            <label onMouseOver={() => setIsMouseOnMonth(true)} onMouseOut={() => setIsMouseOnMonth(false)}
                   className='calendarHeader__monthName'>{isMouseOnMonth ? dateToStringConverter(currentDate) : monthName}</label>
            <Button content='Next month'
                    circular={true}
                    labelPosition='right'
                    icon='angle right'
                    disabled={!isNextMonthAvailable}
                    onClick={onClickNextMonth}/>
        </div>
    )
};

const dateToStringConverter = (date: Date) => {
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    const month = date.getMonth() > 9 ? date.getMonth() : `0${date.getMonth()}`;
    return `${day}-${month}-${date.getFullYear()}`;
};

const onClickNextMonth = () => {
    alert('next month has been clicked')
    // TODO: implement logic next month
};

const onClickPrevMonth = () => {
    alert('previous month has been clicked')
    // TODO: implement logic previous month
};
import React, {useState} from 'react';
import {Button} from "semantic-ui-react";
import './CalendarHeader.css';

interface IProps {
    monthName: string
}

export default (props: IProps) => {
    const [isPreviousMonthAvailable, setIsPreviousMonthAvailable] = useState(false);
    const [isNextMonthAvailable, setIsNextMonthAvailable] = useState(false);
    const {monthName} = props;

    return (
        <div className='calendarHeader'>
            <Button content='Previous month'
                    circular={true}
                    icon='angle left'
                    labelPosition='left'
                    disabled={!isPreviousMonthAvailable}
                    onClick={onClickPrevMonth}/>
            <label className='calendarHeader__monthName'>{monthName}</label>
            <Button content='Next month'
                    circular={true}
                    labelPosition='right'
                    icon='angle right'
                    disabled={!isNextMonthAvailable}
                    onClick={onClickNextMonth}/>
        </div>
    )
};

const onClickNextMonth = () => {
    alert('next month has been clicked')
    // TODO: implement logic next month
};

const onClickPrevMonth = () => {
    alert('previous month has been clicked')
    // TODO: implement logic previous month
};
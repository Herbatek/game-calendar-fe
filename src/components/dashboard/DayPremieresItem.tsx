import React from 'react';
import './DayPremieresItem.css';

interface IProps {
    dayNumber: number,
    games: string[]
}

export default (props: IProps) => {
    const {dayNumber, games} = props;
    return (
        <div className='dayPremieresItem'>
            <div className='dayPremieresItem__header'>
                <label>{dayNumber + 1}</label>
            </div>
            <div className='dayPremieresItem__body'>
                <ul>
                    {games.map(game => <li key={games.indexOf(game)}>{game}</li>)}
                </ul>
            </div>
        </div>)
};
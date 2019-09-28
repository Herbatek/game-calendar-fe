import React from 'react';
import {IGame} from "../../interfaces/IGame";
import './DayPremieresItem.css';

interface IProps {
    dayNumber: number,
    games: IGame[]
}

export default (props: IProps) => {
    const {dayNumber, games} = props;
    return (
        <div className='dayPremieresItem'>
            <div className='dayPremieresItem__header'>
                <label>{dayNumber + 1}</label>
            </div>
            <div className='dayPremieresItem__body'>
                {games !== undefined ? <ul>
                    {games.map(game => <li key={games.indexOf(game)}>{game.name}</li>)}
                </ul> : null}

            </div>
        </div>)
};
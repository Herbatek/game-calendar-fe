import React from 'react';
import {IGame} from "../../interfaces/IGame";
import './Day.css';

interface IProps {
    dayNumber: number,
    games: IGame[]
}

export default (props: IProps) => {
    const {dayNumber, games} = props;
    return (
        <div className='day'>
            <div className='day__header'>
                <label>{dayNumber + 1}</label>
            </div>
            <div className='day__body'>
                {games !== undefined ? (
                    <ul className='day__list'>
                        {games.map(game =>
                            <li className='day__game' key={game.id}>
                                <label className='day__gameName'>{game.name}</label>
                            </li>)}
                    </ul>) : null}

            </div>
        </div>)
};
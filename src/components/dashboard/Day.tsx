import React, {useState} from 'react';
import {IGame} from "../../interfaces/IGame";
import './Day.css';

interface IProps {
    dayNumber: number,
    games: IGame[]
}

export default (props: IProps) => {
    const {dayNumber, games} = props;

    function renderGames() {
        const numberOfGames = games.length;
        if (numberOfGames > 4) {
            const numberLeftGames = games.slice(4, numberOfGames).length;
            const gamesToShow = games.slice(0, 4).map(game =>
                <li className='day__game' key={game.id}>
                    <label className='day__gameName'>{game.name}</label>
                </li>);
            gamesToShow.push(<li className='day__game' key={'games-last'}>
                <label className='day__gameName'>{`and ${numberLeftGames} more...`}</label>
            </li>);
            return gamesToShow;
        }
        return games.map(game =>
            <li className='day__game' key={game.id}>
                <label className='day__gameName'>{game.name}</label>
            </li>);
    }

    return (
        <div className='day'>
            <div className='day__header'>
                <label>{dayNumber + 1}</label>
            </div>
            <div className='day__body'>
                {games !== undefined ? (
                    <ul className='day__list'>
                        {renderGames()}
                    </ul>) : null}

            </div>
        </div>)
};
import React, {Component} from 'react';
import './DayPremieresItem.css';

interface IProps {
    dayNumber: number,
    games: string[]
}

interface IState {

}

class DayPremieresItem extends Component<IProps, IState> {
    render() {
        const {dayNumber, games} = this.props;
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
            </div>);
    }
}

export default DayPremieresItem;
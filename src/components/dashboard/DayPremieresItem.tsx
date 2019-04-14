import React, {Component} from 'react';
import './DayPremieresItem.css';

interface IProps {
    dayNumber: number
}

interface IState {

}

class DayPremieresItem extends Component<IProps, IState> {
    render() {
        const {dayNumber} = this.props;
        return (
            <div className='dayPremieresItem' key={dayNumber}>
                <div className='dayPremieresItem__header'>
                    <label>{dayNumber + 1}</label>
                </div>
                <div className='dayPremieresItem__body'>
                    <ul>
                        <li>The Witcher 3 Wild Hunt</li>
                        <li>Counter Strike: Global Offensive 2</li>
                        <li>Conquer 3.0</li>
                    </ul>
                </div>
            </div>);
    }
}

export default DayPremieresItem;
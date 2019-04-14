import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        const name = 'Piotr Cużytek';
        const year = '2019';
        const email = 'kenshin985@gmail.com';
        return (
            <footer className='footer'>
                <p>
                    {name} - {year} | <a href={`mailto:${email}`}>Send me an email</a>
                </p>
            </footer>
        );
    }
}

export default Footer;
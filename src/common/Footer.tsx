import React from 'react';
import './Footer.css';

export default () => {
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
};
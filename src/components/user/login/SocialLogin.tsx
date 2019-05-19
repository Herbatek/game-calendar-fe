import React from 'react';
import {Button} from "semantic-ui-react";
import './SocialLogin.css';
import {Link} from "react-router-dom";

export default () => {
    return (
        <div className='socialLogin'>
            <Button as={Link} to='/auth-google' color='google plus' icon='google' content='Log in with Google'
                    className='socialLogin__button'/>
            <Button as={Link} to='/auth-facebook' color='facebook' icon='facebook' content='Log in with Facebook'
                    className='socialLogin__button'/>
        </div>
    );
}
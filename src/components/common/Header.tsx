import React, {useState} from 'react';
import {Button, Menu, MenuItemProps} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import './Header.css';

interface IProps {
    isAuthenticated: boolean,
    currentUser: any,
    onLogout: (redirectTo?: string, notificationType?: string, description?: string) => void
}

export default (props: IProps) => {
    const [activeItem, setActiveItem] = useState('home');
    return (
        <Menu borderless={true} size='tiny'>
            <Menu.Item as={Link} to='/' name='Home' icon='home' active={activeItem === 'home'}
                       onClick={(e: React.MouseEvent, {name = 'home'}: MenuItemProps) => setActiveItem(name)}/>
            <Menu.Menu position='right'>
                <Menu.Item>
                    {props.isAuthenticated ? showLogout(props.onLogout) : showLoginButtons()}
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}

const showLogout = (onLogout: Function) => {
    return <Button color='red' onClick={() => onLogout} icon='log out' content='Logout'/>
};

const showLoginButtons = () => {
    return (
        <Button.Group>
            <Button as={Link} to='/login' primary icon='sign-in' content='Login'/>
            <Button as={Link} to='/register' secondary icon='signup' content='Register'/>
            <Button color='google plus' icon='google' content='Google' disabled={true}/>
            <Button color='facebook' icon='facebook' content='Facebook' disabled={true}/>
        </Button.Group>)
};
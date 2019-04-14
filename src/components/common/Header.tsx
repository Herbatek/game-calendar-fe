import React, {Component} from 'react';
import {Button, Menu, MenuItemProps} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import './Header.css';

interface IProps {
    isAuthenticated: boolean,
    currentUser: any,
    onLogout: (redirectTo?: string, notificationType?: string, description?: string) => void
}

interface IState {

}

class Header extends Component<IProps, IState> {
    state = {activeItem: 'home'};

    render() {
        const {activeItem} = this.state;
        const {isAuthenticated} = this.props;
        return (
            <Menu borderless={true} size='tiny'>
                <Menu.Item as={Link} to='/' name='Home' icon='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        {isAuthenticated ? this.showLogout() : this.showLoginButtons()}
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }

    handleItemClick = (e:React.MouseEvent, {name}:MenuItemProps) => this.setState({activeItem: name});

    showLogout = () => {
        return <Button color='red' onClick={() => this.props.onLogout} icon='log out' content='Logout'/>
    };

    showLoginButtons = () => {
        return (
            <Button.Group>
                <Button as={Link} to='/login' primary icon='sign-in' content='Login'/>
                <Button as={Link} to='/register' secondary icon='signup' content='Register'/>
                <Button color='google plus' icon='google' content='Google' disabled={true}/>
                <Button color='facebook' icon='facebook' content='Facebook' disabled={true}/>
            </Button.Group>)
    }
}

export default Header;
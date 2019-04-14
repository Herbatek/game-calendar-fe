import React, { Component } from 'react';
import './Show.css'

interface IProps {
    isAuthenticated: boolean,
    currentUser: any
}

interface IState {

}

class ShowUserProfile extends Component<IProps, IState> {
    render() {
        return (
            <div>
                Profile
            </div>
        );
    }
}

export default ShowUserProfile;
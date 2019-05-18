import React from 'react';
import { ACCESS_TOKEN } from '../constants';
import { Redirect } from 'react-router-dom'

interface IProps {
    location: Location
}

export default (props: IProps) => {
        const token = getUrlParameter('token', props.location);
        const error = getUrlParameter('error', props.location);

        if(token) {
            localStorage.setItem(ACCESS_TOKEN, token);
            return <Redirect to={{
                pathname: "/",
                state: { from: props.location }
            }}/>;
        } else {
            return <Redirect to={{
                pathname: "/login",
                state: {
                    from: props.location,
                    error: error
                }
            }}/>;
    }
}

const getUrlParameter = (name: String, location: Location) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

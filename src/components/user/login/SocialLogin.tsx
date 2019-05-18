import React from 'react';
import {FACEBOOK_AUTH_URL, GOOGLE_AUTH_URL} from "../../../constants";

interface IProps {

}

export default (props: IProps) => {
        return (
            <div className="social-login">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    Log in with Google</a>
                <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    Log in with Facebook</a>
            </div>
        );
}
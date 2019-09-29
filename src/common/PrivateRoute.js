import React from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";


const PrivateRoute = ({component: Component, isAuthenticated, path, handleLogout}) => (
    <Route
        path={path}
        handleLogout={handleLogout}
        render={props =>
            isAuthenticated ? (
                <Component path={path} handleLogout={handleLogout} {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: {from: props.location}
                    }}
                />
            )
        }
    />
);

export default PrivateRoute
import React, {Component, Suspense, lazy} from 'react';
import {Route, withRouter, Switch, RouteComponentProps} from "react-router-dom";
import {Container} from "semantic-ui-react";
import {getCurrentUser} from "../util/APIUtils";
import {ACCESS_TOKEN} from "../constants";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Loader from '../common/Loader';
import PrivateRoute from "../common/PrivateRoute";
import OAuth2RedirectHandler from '../common/OAuth2RedirectHandler';
import './App.css';

const DashboardShow = lazy(() => import('../components/dashboard/Show'));
const RegisterUser = lazy(() => import('../components/user/register/Register'));
const ShowUserProfile = lazy(() => import('../components/user/profile/Show'));
const LoginUser = lazy(() => import('../components/user/login/Login'));
const GameShow = lazy(() => import('../components/game/Show'));
const NotFound = lazy(() => import('../common/NotFound'));

interface IProps extends RouteComponentProps<any> {

}

class App extends Component<IProps> {
    state = {
        currentUser: null,
        isAuthenticated: false,
        isLoading: false
    };

    componentDidMount() {
        this.loadCurrentlyLoggedInUser();
    }

    loadCurrentlyLoggedInUser() {
        this.setState({
            isLoading: true
        });
        console.log("loadCurrentUser");
        getCurrentUser()
            .then(response => {
                console.log("found");
                    this.setState({
                        currentUser: response,
                        isAuthenticated: true,
                        isLoading: false
                    })
                }
            ).catch(error => {
            console.log("not found");
            this.setState({
                isLoading: false
            });
        });
    };

    handleLogout = (redirectTo = '/', notificationType = 'success', description = 'You\'re successfully logged out.') => {
        localStorage.removeItem(ACCESS_TOKEN);

        this.setState({
            currentUser: null,
            isAuthenticated: false
        });

        this.props.history.push(redirectTo);
    };

    handleLogin = (redirectTo = '/', notificationType = 'success', description = 'You\'re successfully logged in.') => {
        // TODO here should be notification
        this.loadCurrentlyLoggedInUser();
        this.props.history.push(redirectTo);
    };

    render() {
        if (this.state.isLoading) {
            return <Loader/>
        }
        return (
            <Container fluid={true} className='main-container'>
                <Header isAuthenticated={this.state.isAuthenticated}
                        currentUser={this.state.currentUser}
                        onLogout={this.handleLogout}/>
                <Container fluid={true} className='main-content'>
                    <Suspense fallback={<Loader/>}>
                        <Switch>
                            <Route exact path='/' component={DashboardShow}/>
                            <Route path="/users/:username" render={(props) => <ShowUserProfile
                                isAuthenticated={this.state.isAuthenticated}
                                currentUser={this.state.currentUser} {...props}  />}/>
                            <Route path="/login" render={(props) => <LoginUser
                                onLogin={this.handleLogin}
                                isAuthenticated={this.state.isAuthenticated} {...props} />}/>
                            <Route path="/register"
                                   render={(props) => <RegisterUser
                                       isAuthenticated={this.state.isAuthenticated} {...props} />}/>
                            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
                            <PrivateRoute isAuthenticated={this.state.isAuthenticated} path="/game/new"
                                          component={GameShow} handleLogout={this.handleLogout}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Suspense>
                </Container>
                <Footer/>
            </Container>
        );
    }
}

export default withRouter(App);

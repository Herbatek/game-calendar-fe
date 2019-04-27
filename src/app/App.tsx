import React, {Component, Suspense, lazy} from 'react';
import {Route, withRouter, Switch, RouteComponentProps} from "react-router-dom";
import {Container} from "semantic-ui-react";
import {getCurrentUser} from "../util/APIUtils";
import {ACCESS_TOKEN} from "../constants";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Loader from '../components/common/Loader';
import PrivateRoute from "../components/common/PrivateRoute";
import './App.css';

const DashboardShow = lazy(() => import('../components/dashboard/Show'));
const RegisterUser = lazy(() => import('../components/user/register/Register'));
const ShowUserProfile = lazy(() => import('../components/user/profile/Show'));
const LoginUser = lazy(() => import('../components/user/login/Login'));
const GameShow = lazy(() => import('../components/game/Show'));
const NotFound = lazy(() => import('../components/common/NotFound'));

interface IProps extends RouteComponentProps<any> {

}

class App extends Component<IProps> {
    state = {
        currentUser: null,
        isAuthenticated: false,
        isLoading: false
    };

    componentDidMount() {
        this.loadCurrentUser();
    }

    loadCurrentUser() {
        this.setState({
            isLoading: true
        });

        getCurrentUser()
            .then(response => this.setState({
                    currentUser: response,
                    isAuthenticated: true,
                    isLoading: false
                })
            ).catch(error => {
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
        this.loadCurrentUser();
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
                            <Route exact path='/' render={props => <DashboardShow
                                isAuthenticated={this.state.isAuthenticated}
                                currentUser={this.state.currentUser}
                                onLogout={this.handleLogout} {...props}/>}/>
                            <Route path="/login" render={(props) => <LoginUser onLogin={this.handleLogin} {...props} />}/>
                            <Route path="/register" render={(props) => <RegisterUser {...props} />}/>
                            <Route path="/users/:username" render={(props) => <ShowUserProfile
                                isAuthenticated={this.state.isAuthenticated}
                                currentUser={this.state.currentUser} {...props}  />}/>
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

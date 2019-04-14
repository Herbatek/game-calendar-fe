import React, {Component} from 'react';
import {Form, Button, Segment, Grid, Divider, Container, FormInputProps} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {login} from "../../../util/APIUtils";
import {ACCESS_TOKEN} from "../../../constants";
import './Login.css'

interface IProps {
    onLogin: (redirectTo?: string, notificationType?: string, description?: string) => void
}

interface IState {
    usernameOrEmail: string,
    password: string,
    [key: string]: string
}

class LoginUser extends Component<IProps, IState> {
    state = {
        usernameOrEmail: '',
        password: ''
    };

    render() {
        const {usernameOrEmail, password} = this.state;
        return (
            <Container>
                <Segment placeholder color='blue'>
                    <Grid columns={2} relaxed='very' stackable>
                        <Grid.Column>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Input icon='user' iconPosition='left' label='Username or email'
                                            placeholder='Username or email' name='usernameOrEmail' value={usernameOrEmail}
                                            onChange={this.handleChange}/>
                                <Form.Input icon='lock' iconPosition='left' label='Password'
                                            placeholder='Password' name='password' value={password}
                                            onChange={this.handleChange} type='password'/>
                                <Button primary type='submit' icon='sign-in' content='Login'/>
                            </Form>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle'>
                            <Button as={Link} to="/register" secondary size='big' content='Registration' icon='signup'/>
                        </Grid.Column>
                    </Grid>
                    <Divider vertical>Or</Divider>
                </Segment>
            </Container>
        );
    }

    handleChange = (e: React.FormEvent, {name, value}:FormInputProps) => this.setState({[name]:  value});

    handleSubmit = () => login(this.state)
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.data.token);
            this.props.onLogin();
        });
}

export default LoginUser;
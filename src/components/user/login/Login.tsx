import React, {useState} from 'react';
import {Form, Button, Segment, Grid, Divider, Container, FormInputProps} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {login} from "../../../util/APIUtils";
import {ACCESS_TOKEN} from "../../../constants";
import {ILoginRequest} from '../../../util/APIUtils';
import './Login.css'

interface IProps {
    onLogin: (redirectTo?: string, notificationType?: string, description?: string) => void
}

export default (props: IProps) => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>
            <Segment placeholder color='blue'>
                <Grid columns={2} relaxed='very' stackable>
                    <Grid.Column>
                        <Form onSubmit={() => handleSubmit(props.onLogin, {usernameOrEmail, password})}>
                            <Form.Input icon='user' iconPosition='left' label='Username or email'
                                        placeholder='Username or email' name='usernameOrEmail' value={usernameOrEmail}
                                        onChange={(e: React.FormEvent, {value}:FormInputProps) => setUsernameOrEmail(value)}/>
                            <Form.Input icon='lock' iconPosition='left' label='Password'
                                        placeholder='Password' name='password' value={password}
                                        onChange={(e: React.FormEvent, {value}:FormInputProps) => setPassword(value)} type='password'/>
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

const handleSubmit = (onLogin: Function, loginData: ILoginRequest) => login(loginData)
    .then(response => {
        localStorage.setItem(ACCESS_TOKEN, response.data.token);
        onLogin();
    });
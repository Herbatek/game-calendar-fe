import React, {useState} from 'react';
import {Button, Form, Segment, Container, FormInputProps} from "semantic-ui-react";
import {register} from "../../../util/APIUtils";
import './Register.css'
import {Redirect} from "react-router";

interface IProps {
    history: any,
    isAuthenticated: boolean
}

interface FormData {
    username: string,
    email: string,
    password: string,
    repeatPassword: string
}

export default (props: IProps) => {
    if (props.isAuthenticated) {
        return <Redirect to={{pathname: "/"}}/>;
    }

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    return (
        <Container>
            <Segment color='black'>
                <Form onSubmit={() => handleSubmit({username, email, password, repeatPassword}, props.history)}>
                    <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' name='username'
                                value={username} onChange={(e: React.FormEvent, {value}: FormInputProps) => setUsername(value)}/>
                    <Form.Input icon='mail' iconPosition='left' label='Email' placeholder='Email' name='email'
                                value={email} onChange={(e: React.FormEvent, {value}: FormInputProps) => setEmail(value)}
                                type={email}/>
                    <Form.Input icon='lock' iconPosition='left' label='Password' placeholder='Password' name='password'
                                value={password} onChange={(e: React.FormEvent, {value}: FormInputProps) => setPassword(value)}
                                type='password'/>
                    <Form.Input icon='lock' iconPosition='left' label='Repeat Password' placeholder='Repeat Password'
                                name='repeatPassword'
                                value={repeatPassword}
                                onChange={(e: React.FormEvent, {value}: FormInputProps) => setRepeatPassword(value)}
                                type='password'/>
                    <div className='registerForm__button--center'>
                        <Button type='submit' primary icon='signup' content='Register'/>
                    </div>
                </Form>
            </Segment>
        </Container>
    );
}

const handleSubmit = (formData: FormData, history: any) => {
    const {username, email, password, repeatPassword} = formData;
    if (username !== '' && email !== '' && password !== '' && password === repeatPassword) {
        register(formData)
            .then(() => history.push('/'));
        // TODO: show something to user lul wtf
    }
};
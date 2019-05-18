import React, {Component} from 'react';
import {Button, Form, Segment, Container, FormInputProps} from "semantic-ui-react";
import {register} from "../../../util/APIUtils";
import './Register.css'
import {Redirect} from "react-router";

interface IProps {
    history: any,
    isAuthenticated: boolean
}

interface IState {
    username: string,
    email: string,
    password: string,
    repeatPassword: string,

    [key: string]: string
}

class RegisterUser extends Component<IProps, IState> {
    state = {
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    };

    render() {
        const {username, email, password, repeatPassword} = this.state;

        if (this.props.isAuthenticated) {
            return <Redirect to={{pathname: "/"}}/>;
        }
        return (
            <Container>
                <Segment color='black'>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' name='username'
                                    value={username} onChange={this.handleChange}/>
                        <Form.Input icon='mail' iconPosition='left' label='Email' placeholder='Email' name='email'
                                    value={email} onChange={this.handleChange} type={email}/>
                        <Form.Input icon='lock' iconPosition='left' label='Password' placeholder='Password' name='password'
                                    value={password} onChange={this.handleChange} type='password'/>
                        <Form.Input icon='lock' iconPosition='left' label='Repeat Password' placeholder='Repeat Password'
                                    name='repeatPassword'
                                    value={repeatPassword} onChange={this.handleChange} type='password'/>
                        <div className='registerForm__button--center'>
                            <Button type='submit' primary icon='signup' content='Register'/>
                        </div>
                    </Form>
                </Segment>
            </Container>
        );
    }

    handleChange = (e: React.FormEvent, {name, value}: FormInputProps) => this.setState({[name]: value});

    handleSubmit = () => {
        const {username, email, password, repeatPassword} = this.state;
        if (username !== '' && email !== '' && password !== '' && password === repeatPassword) {
            register(this.state);
            this.props.history.push('/');
        }
    }
}

export default RegisterUser;
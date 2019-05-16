import React from 'react';
import {Link} from 'react-router-dom';
import {Message, Button, Container} from "semantic-ui-react";
import './NotFound.css';

export default () => {
    return (
        <Container>
            <Message negative>
                <Message.Header>404</Message.Header>
                <p>The Page you're looking for was not found.</p>
                <Link to="/">
                    <Button size="large" content='Go back'/>
                </Link>
            </Message>
        </Container>
    )
}
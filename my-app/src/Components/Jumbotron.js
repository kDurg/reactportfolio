import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const jumbotron = (props) => {
    return (
        <Jumbotron fluid>
            <Container fluid>
                <p id = "jumbotronText" text>Web Developer.</p>
            </Container>
        </Jumbotron>
    );
};

export default jumbotron;
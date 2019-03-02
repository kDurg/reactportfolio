import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { useSpring, animated } from 'react-spring'

const jumbotron = (props) => {
    return (
        <Jumbotron fluid>
            <Container fluid>
                <p id = "jumbotronTextWD">Web Developer.</p>
                <div className = "specializationDiv">
                    <span id = "jumbotronTextHTML" href = "/home">HTML5</span>
                    <span> ● </span>
                    <span id = "jumbotronTextCSS">CSS3</span>
                    <span> ● </span>
                    <span id = "jumbotronTextJs">JAVASCRIPT</span>
                    <span> ● </span>
                    <span id = "jumbotronTextReact">REACT</span>
                </div>
            </Container>
        </Jumbotron>
    );
};

export default jumbotron;
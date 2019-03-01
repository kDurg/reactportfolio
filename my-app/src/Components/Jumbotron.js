import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import '../App.css'
import HomeImage from "../assets/bikeBackground.jpg"
import LazyHero from 'react-lazy-hero';
import "../App.css";


const Example = (props) => {
    return (
        <Jumbotron>
            {/* <Container> */}
                {/* <p>Jumbotron Image</p> */}
                {/* <img src = {HomeImage} /> */}
                <img src = {HomeImage} width = "95vw" height = "95vh" background-attachment = "fixed" ></img>
            {/* </Container> */}
        </Jumbotron>
    );
};

export default Example;
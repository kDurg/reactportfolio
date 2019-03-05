import React, { Component } from 'react';
import Components, { Navbar, Jumbotron, Textbox, ProPersonal, Footer } from "../Components/AllComponents"
import { Container, Row, Col } from 'reactstrap';

const contactForm = (props) => {
    return (
        <>
            <Jumbotron name = "allJumbotron headlineJumbotron contactJumbotron" />
            <h1>Contact Page</h1>
        </>
    )
}

export default contactForm;
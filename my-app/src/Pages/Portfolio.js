import React, { Component } from 'react';
import Components, { Navbar, Jumbotron, Textbox, ProPersonal, Footer } from "../Components/AllComponents"
import { Container, Row, Col } from 'reactstrap';

const portfolioPage = (props) => {
    return (
        <>
            <Jumbotron name = "allJumbotron headlineJumbotron portfolioJumbotron" />
            <h1>Portfolio</h1>
        </>
    )
}

export default portfolioPage;
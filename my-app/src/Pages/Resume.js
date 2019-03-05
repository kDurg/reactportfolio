import React, { Component } from 'react';
import Components, { Navbar, Jumbotron, Textbox, ProPersonal, Footer } from "../Components/AllComponents"
import { Container, Row, Col } from 'reactstrap';

const resumePage = (props) => {
    return (
        <>
            <Jumbotron name = "allJumbotron headlineJumbotron contactJumbotron" />
            <h1>Resume</h1>
        </>
    )
}

export default resumePage;
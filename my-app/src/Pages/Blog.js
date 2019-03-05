import React, { Component } from 'react';
import Components, { Navbar, Jumbotron, Textbox, ProPersonal, Footer } from "../Components/AllComponents"
import { Container, Row, Col } from 'reactstrap';

const blog = (props) => {
    return (
        <>
            <Jumbotron name = "allJumbotron headlineJumbotron blogJumbotron" headlineText = "Blog"/>
            <h1>Blog page, Yo!</h1>
        </>

    );
}

export default blog;
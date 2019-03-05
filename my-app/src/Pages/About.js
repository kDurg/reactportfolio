import React, { Component } from 'react';
import Components, { Navbar, Jumbotron, Textbox, ProPersonal, Footer } from "../Components/AllComponents"
import { Container, Row, Col } from 'reactstrap';

const About = (props) => {
    return (
        <div>
            <Jumbotron name = "allJumbotron headlineJumbotron aboutJumbotron" headlineText = "About Kyle" />
            <h1>Kyle Who?</h1>
            <div className = {Container}>
                <div className = {Row}>
                    <div className = {Col}>
                        <img id = "profilePic" />
                    </div>
                    <div className = {Col}>
                        <Textbox 
                            id = "aboutText"
                            pageText = "This is a little bit about me:" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;

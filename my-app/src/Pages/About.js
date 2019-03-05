import React, { Component } from 'react';
import Components, { Navbar, Jumbotron, Textbox, ProPersonal, Footer } from "../Components/AllComponents"
import { Container, Row, Col } from 'reactstrap';
import websiteTextObject from "../websiteTextObject.json"

const About = (props) => {
    return (
        <div>
            <Jumbotron 
                name = "allJumbotron headlineJumbotron aboutJumbotron" 
                headlineName = "jumbotronPagesHeadlineText"
                headlineText = "About Kyle"
                 />
            <div className = {Container} >
                <Row>
                    <Col sm="4" >
                        <img id = "profilePic" />
                    </Col>
                    <Col sm="7" >
                        <Row>
                            <Textbox 
                                id = "aboutText"
                                pageText = {websiteTextObject.pages.about.text.p1}
                            />
                            <Textbox 
                                id = "aboutText"
                                pageText = {websiteTextObject.pages.about.text.p2}
                            />
                            <Textbox 
                                id = "aboutText"
                                pageText = {websiteTextObject.pages.about.text.p3}
                            />
                            <Textbox 
                                id = "aboutText"
                                pageText = {websiteTextObject.pages.about.text.p4}
                            />
                        </Row>

                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default About;

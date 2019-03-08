import React, { Component } from 'react';
import Components, { Navbar, Jumbotron, Textbox, ProPersonal, Footer } from "../Components/AllComponents"
import { Container, Row, Col } from 'reactstrap';
import websiteTextObject from "../websiteTextObject.json";

const About = (props) => {
    return (
        <div>
            <Jumbotron
                name="allJumbotron headlineJumbotron aboutJumbotron"
                headlineName="jumbotronPagesHeadlineText"
                headlineText="About Kyle"
            />

            <div className={Container} >
                <Row>
                    <Col md="2" >
                        <Row>
                            <img id="profilePic" />
                        </Row>
                        <Row className="socialIconRow">
                            <ul className="font-awesome">
                                <a href="https://www.linkedin.com/in/kyledurigan/" target="_blank" rel="noopener noreferrer" data-tip data-for='linkedin'
                                    className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                                    <i className="fab fa-linkedin socialIcons"></i>
                                </a>
                            </ul>
                            <li className="nav-item d-flex justify-content-start">
                                <a href="https://www.github.com/kdurg" target="_blank" rel="noopener noreferrer" data-tip data-for='github' className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}><i className="fab fa-github socialIcons" data-tip="github"></i></a>
                            </li>
                        </Row>
                    </Col>
                    <Col md="1" />
                    <Col md="8" >
                        <Row>
                            <Textbox
                                id="aboutText"
                                pageText={websiteTextObject.pages.about.text.p1}
                            />
                            <Textbox
                                id="aboutText"
                                pageText={websiteTextObject.pages.about.text.p2}
                            />
                            <Textbox
                                id="aboutText"
                                pageText={websiteTextObject.pages.about.text.p3}
                            />
                            <Textbox
                                id="aboutText"
                                pageText={websiteTextObject.pages.about.text.p4}
                            />

                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default About;

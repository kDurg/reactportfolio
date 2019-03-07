import React, { Component } from 'react';
import Components, { Navbar, Jumbotron, Textbox, ProPersonal, Footer } from "../Components/AllComponents"
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import firebase from "../Components/Firebase";

export default class contactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (!this.state.name || !this.state.email || !this.state.message) {
            alert("Fill out your name, email and message please!");
        } else {
            alert("Your message has been sent!")
        }

        const itemsRef = firebase.database().ref('items');
        const item = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        itemsRef.push(item);
        this.setState({
            name: '',
            email: '',
            message: ''
        });
    };


    render() {
        return (
            <>
                <Jumbotron
                    name="allJumbotron headlineJumbotron contactJumbotron"
                    headlineName="jumbotronPagesHeadlineText"
                    headlineText="Contact Me"
                />

                <Row className = "contactFormDiv">
                    <Col lg="8 offset-2">
                        <Form onSubmit={this.handleFormSubmit}>
                            <Label for="message"><h3>Drop me a message to <a href={"mailto:kyle.durigan@gmail.com"}>kyle.durigan@gmail.com</a> or fill out your information below!</h3></Label>
                            <FormGroup>
                                <Input type="text" name="name" id="name" placeholder="YOUR NAME" onChange={this.handleChange} value={this.state.name} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="email" name="email" id="email" placeholder="YOUR EMAIL" onChange={this.handleChange} value={this.state.email} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="textarea" name="message" id="message" placeholder="LET'S WORK TOGETHER!" onChange={this.handleChange} value={this.state.message} />
                            </FormGroup>
                            <Button className="btn-primary" type="submit" color="light" onClick={this.handleFormSubmit}>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </>
        )
    }
}


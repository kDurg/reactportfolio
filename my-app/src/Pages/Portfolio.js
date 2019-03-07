import React, { Component } from 'react';
import Components, { Navbar, Jumbotron, Textbox, ProPersonal, Footer, ImageBox } from "../Components/AllComponents"
import { Container, Row, Col, CardDeck } from 'reactstrap';
import bamazonPhoto from "../assets/BAMazon.PNG";
import trademarkPhoto from "../assets/trademark.PNG";
import zoosnatchPhoto from "../assets/ZooSnatch.PNG"
import zoosnatch2Photo from "../assets/ZooSnatch2.PNG"


const portfolioPage = (props) => {
    return (
        <>
            <Jumbotron 
                name = "allJumbotron headlineJumbotron portfolioJumbotron" 
                headlineName = "jumbotronPagesHeadlineText"
                headlineText = "Recent Projects"
            />
            <CardDeck>
                <ImageBox imageSource = {zoosnatch2Photo} title = "ZooSnatch2" tech = "ReactJS, Javascript, MongoDB, Mongoose" weblink = "https://zoosnatch2.herokuapp.com/" gitlink = "https://github.com/kDurg/zoosnatch2"/>
                <ImageBox imageSource = {zoosnatchPhoto} title = "ZooSnatch" tech = "Javascript, HTML5, CSS3, mySQL, Sequilize" weblink = "https://zoosnatch.herokuapp.com/" gitlink = "https://github.com/kDurg/ChooseYourAdventure"/>
                <ImageBox imageSource = {bamazonPhoto} title = "BAMazon" tech = "Javascript, JQuery, NodeJS, mySQL" weblink = "https://youtu.be/Y7i7H0tp5qk" gitlink = "https://github.com/kDurg/BAMazon"/>
                <ImageBox imageSource = {trademarkPhoto} title = "Trademark" tech = "Javascript, HTML5, CSS5, Bootstrap, API-Calls, Firebase" weblink = "https://kdurg.github.io/tradeMark/" gitlink = "https://github.com/kDurg/tradeMark"/>
            </CardDeck>
        </>
    );
}

export default portfolioPage;
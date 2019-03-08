import React, { Component } from 'react';
import '../App.css';
import Components, { Navbar, Jumbotron, Textbox, ProPersonal, Footer } from "../Components/AllComponents"
import { Container, Row, Col } from 'reactstrap';
import {Animated} from "react-animated-css";




const Home = (props) => {
  return (
    <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>

    <div className={Container}>
      <Jumbotron
        name="allJumbotron homeJumbotron"
        headlineName="jumbotronHomeHeadlineText"
        headlineText="Web Developer."
        supportTextDivName="specializationDiv"
        supportText={
          <>
              <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>

            <span id="jumbotronTextHTML" href="/home">HTML5</span>
            <span id = "jumbotronTextBullet"> ● </span>
            <span id="jumbotronTextCSS">CSS3</span>
            <span id = "jumbotronTextBullet"> ● </span>
            <span id="jumbotronTextJs">JAVASCRIPT</span>
            <span id = "jumbotronTextBullet"> ● </span>
            <span id="jumbotronTextReact">REACT</span>
            </Animated>

          </>
        }
      />

    </div>
    </Animated>

  );
}


export default Home;

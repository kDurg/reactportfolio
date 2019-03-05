import React, { Component } from 'react';
import '../App.css';
import Components, { Navbar, Jumbotron, Textbox, ProPersonal, Footer } from "../Components/AllComponents"
import { Container, Row, Col } from 'reactstrap';


const Home = (props) => {
  return (
    <div className={Container}>
      <Jumbotron
        name="allJumbotron homeJumbotron"
        headlineName="jumbotronHomeHeadlineText"
        headlineText="Web Developer."
        supportTextDivName="specializationDiv"
        supportText={
          <>
            <span id="jumbotronTextHTML" href="/home">HTML5</span>
            <span> ● </span>
            <span id="jumbotronTextCSS">CSS3</span>
            <span> ● </span>
            <span id="jumbotronTextJs">JAVASCRIPT</span>
            <span> ● </span>
            <span id="jumbotronTextReact">REACT</span>
          </>
        }
      />
    </div>
  );
}


export default Home;

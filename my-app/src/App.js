import React, { Component } from 'react';
import './App.css';
import Components, { Navbar, Jumbotron, Textbox, ProPersonal, Footer } from "./Components/AllComponents"
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = {Container}>

          <div className = {Row}>
            <header className="App-header">
              <Navbar />
            </header>
          </div>
        
          <div className = {Row}>
            <body className= "App-body">
              <Jumbotron />
              {/* <Textbox /> 
              <ProPersonal /> */}
            </body>
          </div>

          {/* <div className = {Row}>
            <footer className = "App-footer">
              <Footer />
            </footer> 
          </div> */}

        </div>
      </div>
    );
  }
}

export default App;

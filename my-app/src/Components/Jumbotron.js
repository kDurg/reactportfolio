import React from 'react';

const jumbotron = (props) => {
    return (
        <div class= {props.name}>
            <div class="container">
                <p id = {props.headlineName}>{props.headlineText}</p>
                <div id = {props.supportTextDivName}>{props.supportText}</div>
            </div>
        </div>
    );
};

export default jumbotron;
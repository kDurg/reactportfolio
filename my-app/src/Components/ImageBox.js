import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

const imageBox = (props) => {
    return (
        <Card>
            <CardImg top width="100%" src= {props.imageSource} alt="Card image cap" />
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle><em>Tech Used:</em></CardSubtitle>
                <CardText>{props.tech}</CardText>
                <Button id = "imageCardButton" href = {props.weblink} target= "_blank">Check it out</Button>
                <Button id = "imageCardButton" href = {props.gitlink} target= "_blank">Show the Code</Button>
            </CardBody>
        </Card>
    );
}

export default imageBox;
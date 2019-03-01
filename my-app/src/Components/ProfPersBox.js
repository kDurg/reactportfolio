import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const ProPersonal = (props) => {
    return (
        <div className = "splitDiv">
            <Container>
                <Row>
                    <Col>
                        <div id = "professionalDiv">
                            <h2>Professional</h2>
                            <ul>
                                <li>Recent Projects</li>
                                <li>Portfolio</li>
                            </ul>
                        </div>
                    </Col>

                    <Col>
                        <div id = "personalDiv">
                            <h2>Personal</h2>
                            <ul>
                                <li>Blog</li>
                                <li>About</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default ProPersonal;
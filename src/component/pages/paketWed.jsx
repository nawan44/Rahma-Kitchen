import React from 'react';
import './css/paketWed.css';

import { Container, Row, Col } from 'reactstrap';
import wed1 from './images/wed1.jpg';
import wed2 from './images/wed2.jpg';
import wed3 from './images/wed3.jpg';
import wed4 from './images/wed4.jpg';
import wed5 from './images/wed5.jpg';
import wed6 from './images/wed6.jpg';

class PaketWedding extends React.Component {
    render() {
        return (
            // <div>
            //     <h1>Paket Wedding</h1>

            // </div>
            <Container>
                <p><h1>Paket Wedding</h1></p> <br />

                <p><h3 className="paketh3">Paket 1</h3>
                    <Row>
                        <Col xs="6"><img src={wed1} className="paketWedImg" /></Col>
                        <Col xs="6">
                            <ol>
                                <li className="liprod">Nasi</li>
                                <li className="liprod">Ayam Sayur</li>
                                <li className="liprod">Sambel</li>
                            </ol>
                        </Col>
                    </Row>
                </p>
                <br />
                <p>
                    <h3 className="paketh3">Paket 2</h3>
                    <Row>
                        <Col xs="6"><img src={wed2} className="paketWedImg" /></Col>
                        <Col xs="6">
                            <ol>
                                <li className="liprod">Nasi</li>
                                <li className="liprod">Ayam Sayur</li>
                                <li className="liprod">Sambel</li>
                            </ol>
                        </Col>
                    </Row>
                </p>
                <br />
                <p>
                    <h3 className="paketh3">Paket 3</h3>
                    <Row>
                        <Col xs="6"><img src={wed3} className="paketWedImg" /></Col>
                        <Col xs="6">
                            <ol>
                                <li className="liprod">Nasi</li>
                                <li className="liprod">Ayam Sayur</li>
                                <li className="liprod">Sambel</li>
                            </ol>
                        </Col>
                    </Row>
                </p>
                <br />
                <p>
                    <h3 className="paketh3">Paket 4</h3>
                    <Row>
                        <Col xs="6"><img src={wed4} className="paketWedImg" /></Col>
                        <Col xs="6">
                            <ol>
                                <li className="liprod">Nasi</li>
                                <li className="liprod">Ayam Sayur</li>
                                <li className="liprod">Sambel</li>
                            </ol>
                        </Col>
                    </Row>
                </p>
                <br />
                <p>
                    <h3 className="paketh3">Paket 5</h3>
                    <Row>
                        <Col xs="6"><img src={wed5} className="paketWedImg" /></Col>
                        <Col xs="6">
                            <ol>
                                <li className="liprod">Nasi</li>
                                <li className="liprod">Ayam Sayur</li>
                                <li className="liprod">Sambel</li>
                            </ol>
                        </Col>
                    </Row>
                </p>
                <br />
                <p>
                    <h3 className="paketh3">Paket 6</h3>
                    <Row>
                        <Col xs="6"><img src={wed6} className="paketWedImg" /></Col>
                        <Col xs="6">
                            <ol>
                                <li className="liprod">Nasi</li>
                                <li className="liprod">Ayam Sayur</li>
                                <li className="liprod">Sambel</li>
                            </ol>
                        </Col>
                    </Row>
                </p>
                <br />
            </Container>
        );
    }
}

export default PaketWedding
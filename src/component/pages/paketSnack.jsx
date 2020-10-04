import React from 'react';
import './css/paketSnack.css';

import { Container, Row, Col } from 'reactstrap';
import bento1 from './images/bento1.jpg';
import bento2 from './images/bento2.jpg';
import bento3 from './images/bento3.jpg';
import bento4 from './images/bento4.jpg';
import bento5 from './images/bento5.jpg';
import bento6 from './images/bento6.jpg';

class PaketSnack extends React.Component {
    render() {
        return (
            // <div>
            //     <h1>Paket Snack Box</h1>

            // </div>
            <Container>
                <p><h1>Paket Snack</h1></p> <br />

                <p><h3 className="paketh3">Paket 1</h3>
                    <Row>
                        <Col xs="6"><img src={bento1} className="paketSnackImg" /></Col>
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
                        <Col xs="6"><img src={bento2} className="paketSnackImg" /></Col>
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
                        <Col xs="6"><img src={bento3} className="paketSnackImg" /></Col>
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
                        <Col xs="6"><img src={bento4} className="paketSnackImg" /></Col>
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
                        <Col xs="6"><img src={bento5} className="paketSnackImg" /></Col>
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
                        <Col xs="6"><img src={bento6} className="paketSnackImg" /></Col>
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

export default PaketSnack
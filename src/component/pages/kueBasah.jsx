import React from 'react';
import './css/kueBasah.css';

import { Container, Row, Col } from 'reactstrap';
import basah1 from './images/basah1.jpg';
import basah2 from './images/basah2.jpg';
import basah3 from './images/basah3.jpg';
import basah4 from './images/basah4.jpg';


class KueBasah extends React.Component {
    render() {
        return (
            // <div>
            //     <h1>Kue Basah</h1>

            // </div>

            <Container>
                <p><h1>Kue Basah</h1></p> <br />

                <p><h3 className="paketh3">Paket 1</h3>
                    <Row>
                        <Col xs="6"><img src={basah1} className="kueBasahImg" /></Col>
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
                        <Col xs="6"><img src={basah2} className="kueBasahImg" /></Col>
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
                        <Col xs="6"><img src={basah3} className="kueBasahImg" /></Col>
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
                        <Col xs="6"><img src={basah4} className="kueBasahImg" /></Col>
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
                <br />
            </Container>
        );
    }
}

export default KueBasah
import React from 'react';
import './css/card-prod.css';
import Basah1 from './images/basah1.jpg';
import { Card, CardImg, Button, CardTitle, CardSubtitle, CardBody, CardText } from 'reactstrap';

class MyCard extends React.Component {
    render() {
        return (
            <div className="card-prod">
                <Card>
                    <CardImg className="card-img" top width="80%" src={Basah1} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Kue Basah 1</CardTitle>
                        <CardSubtitle>Kue</CardSubtitle> <br />
                        <CardSubtitle>Harga</CardSubtitle><br />
                        <CardText>
                            Bahan : <br />
                            <ol>
                                <li>Terigu</li>
                                <li>Gula</li>
                                <li>Cokelat</li>
                                <li>Mentega</li>
                            </ol>
                        </CardText>
                        <Button color="primary" size="lg" block><a href="form-order" >Pesan</a></Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
export default MyCard;
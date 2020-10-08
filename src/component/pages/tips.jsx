import React from 'react';
import { Jumbotron, Card, Button } from 'reactstrap';
import './css/tips.css';



class Tips extends React.Component {
    render() {
        return (
            <div className="tips">
                <h1>Tips & Trik</h1>
                <Card >
                    <iframe width="100%" height="500 px"
                        src="https://www.youtube.com/embed/wrGqjy5ZnSw?start=auto" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br />
                    <p className="lead">Tips Membuat Kue Pastel</p>
                    <hr className="my-2" />
                    <p>
                        Berikut ini adalah bahan baku yang dibutuhkan
                        <ol>
                            <li>Terigu</li>
                            <li>Gula</li>
                            <li>Garam</li>
                        </ol>
                    </p>
                    <p className="lead">

                        <Button color="primary"><a href="./contact">Hubungi Kami</a></Button>
                    </p>
                </Card>

            </div >
        );
    }
}

export default Tips
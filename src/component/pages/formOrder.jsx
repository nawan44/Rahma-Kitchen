import React from 'react';
import './css/form_order.css';
import { Col, Row, Button, FormFeedback, FormText, Form, FormGroup, Label, Input } from 'reactstrap';


class FormOrder extends React.Component {
    render() {
        return (
            <div class="form_order">
                <h1>FORM ORDER</h1>
                <Form>
                    <FormGroup>
                        <Label for="text">Nama</Label>
                        <Input />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleNumber">No Hp</Label>
                        <Input
                            type="number"
                            name="number"
                            id="exampleNumber"
                            placeholder="08111xxx"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAddress">Alamat Pengiriman</Label>
                        <Input type="text" name="address" id="exampleAddress" placeholder="Jalan Sudirman" />
                    </FormGroup>
                    <FormGroup >
                        <Label for="exampleAddress">Paket</Label>
                        <br />
                        <Label check>
                            <p><Input type="checkbox" /> Paket 1 </p>
                            <p><Input type="checkbox" /> Paket 2 </p>
                            <p><Input type="checkbox" /> Paket 3 </p>
                            <p><Input type="checkbox" /> Paket 4 </p>
                            <p><Input type="checkbox" /> Paket 5 </p>
                            <p><Input type="checkbox" /> Paket 6 </p>

                        </Label>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleDate">Tanggal Pengiriman</Label>
                        <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="date placeholder"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleTime">Jam Pengiriman</Label>
                        <Input
                            type="time"
                            name="time"
                            id="exampleTime"
                            placeholder="time placeholder"
                        />
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button>Kirim</Button>
                        </Col>
                    </FormGroup>

                </Form>


            </div>
        );
    }

}

export default FormOrder;
import React from 'react';
import './css/form_confirm.css';
import { CustomInput, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import bca from './images/bca.png'
import mandiri from './images/mandiri.png'


const logoBank = {
    width: '10%'
}


class FormConfirm extends React.Component {
    render() {
        return (
            <div className="form_confirm">
                <h1>FORM KONFIRMASI PEMBAYARAN</h1> <br />

                <Form>
                    <FormGroup>
                        <Label>Nama Pemesan :</Label>
                        <Input />
                    </FormGroup>
                    <FormGroup>
                        <Label>Kode Pemesanan</Label>
                        <Input />
                    </FormGroup>
                    <FormGroup>
                        <Label>Nama Pemilik Rekening :</Label>
                        <Input />
                    </FormGroup>
                    <FormGroup>
                        <Label>Bank Transfer</Label>
                        <Input />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleCheckbox">Transfer Bank ke</Label>
                        <div>
                            <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Bank BCA" />
                            <p><img src={bca} style={logoBank} /> <br />
                                    Bank BCA <br />
                                    Cabang Harapan Indah<br />
                                    No rekening : 12345678
                                    </p>

                            <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Bank Mandiri" />
                            <p><img src={mandiri} style={logoBank} /><br />
                                    Bank Mandiri <br />
                                    Cabang Harapan Indah<br />
                                    No rekening : 12345678
                                    </p>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label>Nominal Transfer :</Label>
                        <Input
                            type="number"
                            name="nominal_trf"
                            id="nominal_trf"
                            placeholder="Rp. "
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Tanggal Transfer</Label>
                        <Input
                            type="date"
                            name="date"
                            id="tgl_trf"
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
                    <FormGroup>
                        <Label>File Upload</Label>
                        <Input
                            type="file"
                            name="file_upload"
                            id="file_upload"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button>Kirim</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default FormConfirm;
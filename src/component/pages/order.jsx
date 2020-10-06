import React from 'react';
// import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import bca from './images/bca.png'
import mandiri from './images/mandiri.png'


const logoBank = {
    width: '10%'
}
class Order extends React.Component {
    render() {
        return (
            <div className="order">
                <h1>Cara Pemesanan</h1>
                <hr /> <br />

                <ol>
                    <li>Isi Form pemesanan berikut ini.<a href="form-order">Form Pemesanan</a></li>
                    <li>Tunggu Konfirmasi dari admin</li>
                    <li>Lakukan transfer sesuai dengan nominal yang diinfokan admin</li>
                    {/* <AccountBalanceIcon /><br /> */}
                    <p><img src={bca} style={logoBank} /> <br />
                    Bank BCA <br />
                    Cabang Harapan Indah<br />
                    No rekening : 12345678
                    </p>
                    <p><img src={mandiri} style={logoBank} /><br />
                    Bank BCA <br />
                    Cabang Harapan Indah<br />
                    No rekening : 12345678
                    </p>
                    <li>Lakukan konfirmasi transfer ke .<a href="https://bit.ly">bit.ly</a></li>
                    <li>Tunggu Konfirmasi dari admin</li>
                    <li>Order akan dibuat sesuai dengan pesanan</li>
                </ol>
            </div>
        );
    }
}

export default Order
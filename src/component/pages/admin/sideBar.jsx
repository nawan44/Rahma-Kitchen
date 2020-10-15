import React from 'react';
import './css/side-bar.css';

class SideBar extends React.Component {
    render() {
        return (
            <div class="container" className="sidebar">
                <ul >
                    <li><a href="./">Home</a></li>
                    <li><a href="input-produk">Input Produk</a></li>
                    <li><a href="input-paket">Input Paket</a></li>
                    <li><a href="#">Input Tips Trik</a></li>
                    <li><a href="daftar-pesanan">Daftar Pesanan</a></li>
                    <li><a href="#">Total Jualan</a></li>
                </ul>
            </div>
        );
    }
}
export default SideBar;
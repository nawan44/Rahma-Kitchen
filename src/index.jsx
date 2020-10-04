import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './component/pages/css/contact.css';
import './component/css/navmenu.css';

import App from './App';
// import Header from './component/header.jsx';
import Carousely from './component/carousel.jsx';
import Navmenu from './component/navmenu.jsx';
import Footer from './component/footer.jsx';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode >

    <Navmenu />
    {/* <Header/> */}
    <Carousely />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

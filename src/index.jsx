import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
// import App from './App';
import Header from './component/header.jsx';
import Navmenu from './component/navmenu.jsx';
import Content from './component/content.jsx';
import Footer from './component/footer.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}

    <Header/>
    <Navmenu/>
    <Content/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
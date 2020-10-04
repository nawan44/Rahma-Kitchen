import React, { Component } from 'react'
import './css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Bento from './component/pages/bento';
import Contact from './component/pages/contact';
import KueBasah from './component/pages/kueBasah';
import KueKering from './component/pages/order';
import Order from './component/pages/order';
import PaketBento from './component/pages/paketBento';
import PaketSnack from './component/pages/paketSnack';
import PaketWedding from './component/pages/paketWed';
import Tips from './component/pages/tips'; 
import Content from './component/content';

export default class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Content} />
            <Route path='/home' component={Content} />
            <Route path='/bento' component={Bento}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/kuebasah' component={KueBasah}/>
            <Route path='/kuekering' component={KueKering}/>
            <Route path='/order' component={Order}/>
            <Route path='/paketbento' component={PaketBento}/>
            <Route path='/paketsnack' component={PaketSnack}/>
            <Route path='/paketwedding' component={PaketWedding}/>
            <Route path='/tipstrik' component={Tips}/>
            

      </Switch>
      </BrowserRouter>
  );
  }
}


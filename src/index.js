import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import "./bootstrap/css/bootstrap.min.css";

import reportWebVitals from './reportWebVitals';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts';

ReactDOM.render(
  <Router>
    <Nav></Nav>
    <Switch>
      <Route exact path = "/"><Home></Home></Route>
      <Route exact path = "/contact"><Contacts></Contacts></Route>
      <Route exact path = "/portfolio"><Portfolio></Portfolio></Route>
    </Switch>
    <Footer></Footer>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

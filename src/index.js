import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Premises from './Premises';
import SmartMap from './SmartMap';
import SmartMap2 from './SmartMap2';
import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Nav, NavItem } from 'react-bootstrap';

ReactDOM.render(
    <Router>
        <div>
            <Nav bsStyle="pills" activeKey={1}>
                <NavItem eventKey="1" href="/">Home</NavItem>
                <NavItem eventKey="2" href="/premises" disabled>Premises</NavItem>
                <NavItem eventKey="3" href="/smart-map">Smart Map</NavItem>
                <NavItem eventKey="3" href="/smart-map-2">Smart Map 2</NavItem>
            </Nav>

        <hr/>

        <Route exact path="/" component={App}/>
        <Route path="/premises" component={Premises}/>
        <Route path="/smart-map" component={SmartMap}/>
        <Route path="/smart-map-2" component={SmartMap2}/>
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();

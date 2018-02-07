import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import asyncComponent from './AsyncComponent';

const Run = asyncComponent(() => import('./Run'));
const Wapi = asyncComponent(() => import('./Wapi'));
// const Test = asyncComponent(() => import('./Test'));

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route exact strict path="/run" component={Run}/>
        <Route exact strict path="/run/:id" component={Run}/>
        <Route exact strict path="/wapi" component={Wapi}/>
    </Switch>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

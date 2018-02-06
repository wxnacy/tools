import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import asyncComponent from './AsyncComponent';

const Run = asyncComponent(() => import('./Run'));
// const Test = asyncComponent(() => import('./Test'));

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route exact strict path="/run" component={Run}/>
        <Route exact strict path="/run/:id" component={Run}/>
    </Switch>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
=======
import moment from 'moment';
import { DatePicker, version } from 'antd';
import 'antd/dist/antd.css';

ReactDOM.render(
  <div style={{ margin: 24 }}>
    <p style={{ marginBottom: 24 }}>
      Current antd version: {version} <br />
      You can change antd version on the left panel (Dependencies section).
    </p>
    <div></div>
    
    <DatePicker defaultValue={moment()} />
  </div>,
  document.getElementById('root')
);
>>>>>>> e954ea13efead386b2c2210ef081be5a37e6af12

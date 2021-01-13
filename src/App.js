import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"

import Home from './pages/Home.js'
import Cone from './pages/Cone.js'

class App extends Component {
  render() {
    const { history } = this.props
    return (
      <div className="App">
        <Switch>
          <Route history={history} path='/home' component={Home} />
          <Route history={history} path='/cone' component={Cone} />
          <Redirect from='/' to='/home'/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)

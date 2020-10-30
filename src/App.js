import React from 'react';
import './App.css';

import Nav from './components/Nav'
import LoginPage from './components/Login'
import RegisterPage from './components/Register'
import LandingPage from './components/Landing'
import NotFoundPage from './components/404'
import UserPage from './components/User'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import  {Paper} from '@material-ui/core'

const App = () => {
  return (
    <Router>
      <Paper elevation={0}>
      <div className="App">
        <Nav />
        <div className="app-container">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/sign-up" component={RegisterPage} />
          <Route path="/users" component={UserPage} />
          <Route path="*" component={NotFoundPage}/>
        </Switch>
        </div>
      </div>
      </Paper>
    </Router>
  );
}
 
export default App;
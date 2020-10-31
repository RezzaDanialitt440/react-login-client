import React, { useEffect } from 'react';
import './App.css';

import NotFoundPage from './components/404'
import UserPage from './components/User'

import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Dashboard from './components/layout/Dashboard'
import Alert from './components/layout/Alert'
import PrivateRoute from './components/routing/PrivateRoute'



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//redux
import {Provider} from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'


if(localStorage.token){
  setAuthToken(localStorage.token)
}


const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  },[])


  return (
    <Provider store={store}>
      <Router>
        <>
          <Navbar />
          <Route path="/" exact component={Landing} />
          <section className="container">
            <Alert/>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </section>
        </>
      </Router>
    </Provider>
  );
}
 
export default App;
import React, { useEffect } from 'react';
import './App.css';

import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Routes from './components/routing/Routes'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//redux
import {Provider} from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'



const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  },[])


  return (
    <Provider store={store}>
      <Router>
        <>
          <Navbar />
          <Switch>
          <Route path="/" exact component={Landing} />
          <Route component={Routes}/>
          </Switch>
          
          
        </>
      </Router>
    </Provider>
  );
}
 
export default App;
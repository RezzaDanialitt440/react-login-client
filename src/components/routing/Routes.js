import React from 'react'
import { Route, Switch } from 'react-router-dom' 

import Login from '../auth/Login'
import Register from '../auth/Register'
import Dashboard from '../layout/Dashboard'
import Alert from '../layout/Alert'
import PrivateRoute from '../routing/PrivateRoute'
import NotFoundPage from '../layout/404'



const Routes = () => {
    return (
<section className="container">
            <Alert/>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </section>
    )
}

export default Routes


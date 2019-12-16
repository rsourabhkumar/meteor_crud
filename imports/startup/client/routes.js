import React from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import ContainUpdatePatient from '../../../client/components/container/containpatientUpdate'
import containpatientListWithoutauth from '../../../client/components/container/containpatientListWithoutauth'
import CreatePatient from '../../../client/components/container/containpatientCreate'
import Patients_Create from  '../../../client/components/patients/patients_create'
import Header from '../../../client/components/header'
// containers
import AppContainer from '../../ui/containers/AppContainer'
import MainContainer from '../../ui/containers/MainContainer'
import signupContainer from '../../ui/containers/signupContainer'

// pages
import SignupPage from '../../ui/pages/SignupPage'
import LoginPage from '../../ui/pages/LoginPage'

export const renderRoutes = () => (
  <Router>
    <div>
      {/* <Header/> */}
      <Switch>
      <Route path="/withoutauth" component={containpatientListWithoutauth}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/signup" component={signupContainer}/>
      <Route exact={true} path="/" component={AppContainer}/>
      <Route exact path="/patient" component={CreatePatient}/>
      <Route exact path="/patients/:patientId" component={ContainUpdatePatient} />
      </Switch>
    </div>
  </Router>
);
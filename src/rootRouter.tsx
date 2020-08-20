import React from 'react';
import {
    BrowserRouter as Router,
    Route, Switch, Redirect} from "react-router-dom";

import App from './App'
import { Contact } from './Views/Contact'
import Factorial from './Views/Factorial';
import { ContactDetails } from './Views/ContactDetails';

const routes = (
    <Router>
      <Route path="/" component= { App } />
      <Route path="/" render={() => (<Redirect to="/factorial-calculation" />)} />    
      <Route path="/contact" component={ Contact }/>
      <Route path="/contact-details/:mobile" component={ ContactDetails }/>
      <Route path="/factorial-calculation" component={Factorial} />
  </Router>
)

export default routes;


{/* <BrowserRouter>

<Route path="/" component={Frontpage} exact />
<Route path="/home" component={HomePage} />
<Route path="/about" component={AboutPage} />

<Route
  path="/admin"
  render={({ match: { url } }) => (
    <>
      <Route path={`${url}/`} component={Backend} exact />
      <Route path={`${url}/home`} component={Dashboard} />
      <Route path={`${url}/users`} component={UserPage} />
    </>
  )}
/>

</BrowserRouter> */}
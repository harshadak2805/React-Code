import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import SignUp from './component/SignUp';
import LogIn from './component/LogIn';
import Person from './component/Person';
import Dashboard from './component/Dashboard'
import CreateUser from './component/CreateUser'
import UserRoles from './component/UserRoles'
import authorize from './component/Authorize'

function App() {
  return (
    <div className="App" >
     <Router>
       <Switch>
        <Route exact path="/" component= {LogIn}/>
         <Route path="/sign-up" component={SignUp}/>
        <Route path="/person" component= {Person}/>
        <Route path="/dashboard" component= {Dashboard}/> 
        <Route path="/createUser" component={CreateUser}/>
        <Route path="/userRoles" component={UserRoles}/>
        <Route path="/authorize" component={authorize}/>
      </Switch>
     </Router>

    </div>
  );
}

export default App;

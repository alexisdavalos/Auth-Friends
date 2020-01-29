import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from '../logo.svg';
import './App.scss';
import Friendslist from './FriendList/FriendsList'
import Login from './Login/login';
import Nav from './Navbars/navbar';
import PrivateRoute from './PrivateRoute';
function App() {
  return (
    <Router>
    <div className="App">
      {/* <header className="App-header">
        <h1>Friends</h1>
      </header> */}
      <Switch>
        <PrivateRoute 
        exact 
        path='/friends' 
        component={Friendslist}
        />
        <Route 
          exact 
          path='/login'
          render={ props => 
            <Login {...props}/>
          }>
        </Route>
        <Route 
          exact 
          path='/'
          render={ props => 
            <Login {...props}/>
          }>
        </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;

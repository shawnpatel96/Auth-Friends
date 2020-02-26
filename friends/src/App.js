import React from 'react';
import Login from "./components/Login"
import './App.css';
import List from "./components/List"
import PrivateRoute from "./components/PrivateRoute"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';




function App() {
  return (
    <Router>
    <div className="App">
      <div>

      <nav>
        <Link to="/login">CLICK TO LOGIN</Link> <br></br>
        <Link to="/protected">Protected Page</Link>
      </nav>
      </div>
      <Switch>
        <PrivateRoute path ="/friends" component={List}/>
        <Route path ="/login" component ={Login}/>
        <Route component ={Login}/>
      </Switch>
     
    </div>
    </Router>
  );
}

export default App;

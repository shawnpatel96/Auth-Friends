import React from 'react';
import Login from "./components/Login"
import './App.css';
import List from "./components/List"
import PrivateRoute from "./components/PrivateRoute"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styled from "styled-components"
const Button= styled.button`
background-color: #4CAF50;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;

`



function App() {
  return (
    <Router>
    <div className="App">
      <div>

      <nav>
        <Link to="/login"><Button>CLICK TO LOGIN</Button></Link> <br></br>
        <Link to="/protected"><Button>Protected Page</Button></Link>
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

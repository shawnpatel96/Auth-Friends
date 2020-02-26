import React from "react"
import axios from "axios"
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


class Login extends React.Component {
    state = {
        credentials: {
          username: '',
          password: ''
        }
}

handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  }


login = e =>{
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', this.state.credentials)
    .then(response=>{
        console.log("resposne from login", response.data)
        localStorage.setItem('token', response.data.payload);
        this.props.history.push('/friends')
    })
    .catch(error=>{
        console.log("ERROR FROM LOGIN:", error.message)
    })
}
 render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.credentials.username}
           
          />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.credentials.password}
           
          />
          <Button>Log in</Button>
        </form>
      </div>
    );
  }
}
  export default Login;
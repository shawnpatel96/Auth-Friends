import React, { useState } from "react";
// import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
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
 const Form =()=>{
    const [newFriend, setNewFriend] = useState({});


    const handleChanges = e =>{
        setNewFriend({
            ...newFriend, [e.target.name] : (e.target.value)
        })
    };
    const addFriend = e =>{
        axiosWithAuth()
        .post("http://localhost:5000/api/friends", newFriend)
        .then(response=>{
            console.log("response from form", response)
        })
        .catch(error=>{
            console.log(error)
        })
    };
    const handleSubmit = e =>{
        addFriend(newFriend)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="...name her"
                    value={newFriend.name}
                    onChange={handleChanges} 
                />
                <input 
                    type="text"
                    name="age"
                    placeholder="...age here"
                    value={newFriend.age}
                    onChange={handleChanges}
                />
                 <input 
                    type="text"
                    name="email"
                    placeholder="...email here"
                    value={newFriend.email}
                    onChange={handleChanges}
                />
                <Button>ADD A FRIEND</Button>
                

            </form>
        </div>
    )






}

export default Form
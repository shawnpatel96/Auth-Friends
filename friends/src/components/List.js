import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Form from "./Form"

class List extends React.Component {
    state={
        friends: [

        ]
    }


componentDidMount() {
    this.getData()
}

getData=()=>{
    axiosWithAuth()
    .get ('./api/friends')
    .then (response=>{
        console.log("response from List", response.data)
        this.setState({
            friends:response.data
        })
    
    })
}

render(){
    return(
        <div>
           
            <Form props={this.state.friends}/>
            <h1>List of your Friends</h1>
            {this.state.friends.map(friend=>{
                return(
                    <div>
                        
                        <h1>{friend.name}</h1>
                        <h3>{friend.age}</h3>
                        <h3>{friend.email}</h3>
                        <h4>Ear Tag Number:{friend.id}</h4>
                    </div>
                )
            })}
        </div>
    )
}
}

export default List
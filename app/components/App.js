import React, { Component } from 'react';
import axios from 'axios';


export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('/api/users')
        .then(res => res.data)
        .then(users => this.setState({ users: users }))
    }



    render() {
        const users = this.state.users.map((user, i) => {
            return (<li key={i} >{ user.name }</li>);
        })
        return (<div>Hello World!
            <ul>
                { users }
            </ul>
        </div>)
    }
}


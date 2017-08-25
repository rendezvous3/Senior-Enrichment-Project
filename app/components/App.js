import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import StudentList from './StudentList';
import CampusList from './CampusList';


export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            users: [],
            campuses: [],
        }
    }

    componentDidMount() {
        axios.get('/api/users')
        .then(res => res.data)
        .then(users => this.setState({ users: users }))

        axios.get('/api/campus')
        .then(res => res.data)
        .then(campuses => this.setState({ campuses: campuses }))
    }



    render() {
        return (<div>
                <Navbar />
                    <div className="container">
                        <StudentList students={this.state.users} />
                        <CampusList campuses={this.state.campuses} />
                    </div>
                </div>)
    }
}

